import { Schema, model } from "mongoose";


export const cartsCollection = "carts"; // nombre de la carpeta collection en mongoDb

const cartSchema = new Schema({
    products: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products",
          },
          quantity: { type: Number, default: 1 },
        },
      ],
    });
    
    collectionSchema.pre("find", function () {
      this.populate("products.product");
    });

export const CartModel = model(cartsCollection, cartSchema);