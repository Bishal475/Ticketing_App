import  express  from "express";
import { User } from "../models/user";

const router = express.Router();

router.post('/api/users/signin',async (req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email: email});
    res.send(user);
})

export {router as signinRouter};