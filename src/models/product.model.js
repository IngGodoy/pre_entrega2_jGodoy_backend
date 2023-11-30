import { Schema, model } from "mongoose";

export const productCollection = "products";

export const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  code: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  status: {type: Boolean, default: true}

});

export const ProductModel = model(productCollection, productSchema);

