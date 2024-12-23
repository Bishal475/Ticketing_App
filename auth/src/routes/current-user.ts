import  express  from "express";

const router = express.Router();

router.get('/api/users/currentuser',(req,res)=>{
    res.send("Under Route Handler!!");
})

export {router as currentUserRouter};