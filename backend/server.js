import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // <-- Add this import
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import authRouter from "./routes/auth.js";
import productRouter from "./routes/products.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from 'public/assets'
// app.use("/assets", express.static("public/assets"));
app.use("/assets", express.static(path.join(process.cwd(), "public/assets")));
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Global error-handling middleware to catch invalid JSON errors

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ message: "Invalid JSON format" });
  }
  next();
});

//auth routes
app.use("/api/auth", authRouter);

app.use("/api/products", productRouter);

app.use("/api/subscribe", subscribeRoutes);

if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(process.env.PORT, () =>
        console.log(`✅ Server running at http://localhost:${process.env.PORT}`)
      );
    })
    .catch((err) => console.error("❌ DB Connection Error:", err));
}

export default app;
