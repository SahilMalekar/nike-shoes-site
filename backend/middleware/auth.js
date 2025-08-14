import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // Pass user data to next middleware
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
