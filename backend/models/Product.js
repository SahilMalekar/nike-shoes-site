import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    size: { type: [Number], required: true, validate: (v) => v.length > 0 },
    images: { type: [String], required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
