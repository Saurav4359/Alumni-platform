 
import { Router } from "express";
const ProfileRouter=Router();

ProfileRouter.post("/run",(req,res)=> {
   res.send("Server here :");
})

export default ProfileRouter;