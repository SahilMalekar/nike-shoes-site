import express from "express";
import { signup } from "../controllers/authController.js";
const router = express.Router();

router.post(
  "/signup",
  (req, res, next) => {
    console.log("Hello sahil");
    next();
  },
  signup
);

export default router;
