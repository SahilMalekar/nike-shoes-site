import express from "express";
import { products, productsDetail } from "../data/product.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const product = productsDetail.find((product) => product.id === id);

  if (!product) return res.status(400).json({ error: "Product not found!" });

  res.status(200).json(product);
});

export default router;
