import Product from "../models/Product.js";

export const addShoe = async (req, res) => {
  const { name, price, brand, description, size, images, stock } = req.body;

  try {
    if (
      !name ||
      !price ||
      !brand ||
      !description ||
      !size?.length ||
      !images?.length ||
      stock == null
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const shoe = await Product.create(req.body);

    return res
      .status(201)
      .json({ msg: "Shoe added successfully (admin only)", shoe });
  } catch (err) {
    console.log("Subscription Error ", err);
    res.status(500).json({ msg: "Failed to add product", err });
  }
};

export const updateShoe = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedShoe = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedShoe) return res.status(404).json({ msg: "Shoe not found" });

    return res
      .status(200)
      .json({ msg: "Shoe updated successfully", updatedShoe });
  } catch (err) {
    res.status(500).json({ msg: "Failed to update shoe", err });
  }
};

export const deleteShoe = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedShoe = await Product.findByIdAndDelete(id);

    if (!deletedShoe) return res.status(404).json({ msg: "Shoe not found" });

    return res
      .status(200)
      .json({ msg: "Shoe deleted successfully", deletedShoe });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete shoe", err });
  }
};
