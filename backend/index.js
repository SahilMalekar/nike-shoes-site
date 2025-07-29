import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // <-- Add this import

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { products, productsDetail } from "./data/product.js";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json({ type: "application/json" }));

// Serve static files from 'public/assets'
// app.use("/assets", express.static("public/assets"));
app.use("/assets", express.static(path.join(process.cwd(), "public/assets")));
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const product = productsDetail.find((product) => product.id === id);

  if (!product) return res.status(400).json({ error: "Product not found!" });

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
