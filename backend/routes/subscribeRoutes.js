import express from "express"
import { subscribeUser } from "../controllers/subscribeController.js";


const router = express.Router()


router.post("/" , ((req , res , next)=>{
    console.log("Hello sahil from subscribe");
    next();
    
}), subscribeUser)

export default router