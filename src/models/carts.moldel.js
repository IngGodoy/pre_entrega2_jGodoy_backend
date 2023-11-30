import { Schema, model } from "mongoose";


export const cartsCollection = "carts"; // nombre de la carpeta collection en mongoDb

const productSchema = new Schema({
    // aqui hago referenci a que IdProduct viene de la colleción products de mongoDb
    productId: { type: Schema.Types.ObjectId, ref: 'products', required: true },
    quantity: {type: Number, default: 1}
});

export const cartSchema = new Schema({
    products: { type: [productSchema], default: [] } 
});

export const CartModel = model(cartsCollection, cartSchema);