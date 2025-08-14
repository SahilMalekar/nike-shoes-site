import express from "express";
import { subscribeUser } from "../controllers/subscribeController.js";
import { authenticateUser } from "../middleware/auth.js";

const router = express.Router();

router.post("/", authenticateUser, subscribeUser);

export default router;
