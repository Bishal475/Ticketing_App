import mongoose from "mongoose";
import { Password } from "../services/password";

// Add attributes needed to feed in to the constructor of UserModel
interface UserAttrs {
    email: string,
    password: string
}

//Add any extra properties to associate with UserModel
interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs: UserAttrs) : UserDoc;
}

//Add any extra field that might come as output from mongoose to UserModel like createAt, updatedAt, etc.
interface UserDoc extends mongoose.Document {
    email: string,
    password: string
}

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
},{
    toJSON:{
        transform(doc,ret){
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
})
userSchema.pre('save', async function(done) {
    if(this.isModified('password')){
        const hashed = await Password.toHash(this.get('password') || '');
        console.log(hashed)
        this.set('password', hashed);
    }
    done();
})

userSchema.statics.build = (attrs: UserAttrs) =>{

    return new User(attrs);
}

export const User = mongoose.model<UserDoc, UserModel>('User', userSchema);
