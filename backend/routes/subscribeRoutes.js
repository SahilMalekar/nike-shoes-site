import express from "express";
import { subscribeUser } from "../controllers/subscribeController.js";
import { authenticateUser } from "../middleware/auth.js";

const router = express.Router();

router.post("/",((req , res , next)=>{ console.log(req.header("Authorization"), "from subscribe middleware")
    next()
}), authenticateUser, subscribeUser);

export default router;
