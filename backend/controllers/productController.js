import { products, productsDetail } from "../data/product.js";
import Product from "../models/Product.js";

export const getPopularProducts = (req, res) => {
  try {
    return res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  try {
    const product = productsDetail.find((product) => product.id === id);

    if (!product) return res.status(400).json({ msg: "Product mot found" });

    return res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// GET shoes with optional filtering
export const getShoes = async (req, res) => {
  try {
    const { brand, size, minPrice, maxPrice, search } = req.query;

    let filter = {};

    if (brand) {
      filter.brand = brand;
    }

    if (size) {
      filter.size = size;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$lte = minPrice;
      if (maxPrice) filter.price.$gte = maxPrice;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const Shoes = await Product.find(filter);

    return res.status(200).json(Shoes);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch products", err });
  }
};
