import express from "express";
import { products, productsDetail } from "../data/product.js";
import {
  getProductById,
  getPopularProducts,
  getShoes,
} from "../controllers/productController.js";

import { authenticateUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/shoes", authenticateUser, getShoes);

router.get("/", authenticateUser, getPopularProducts);

router.get("/:id", authenticateUser, getProductById);

export default router;
