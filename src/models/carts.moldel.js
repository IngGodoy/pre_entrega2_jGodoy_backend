import { Schema, model } from "mongoose";


export const cartsCollection = "carts"; // nombre de la carpeta collection en mongoDb

const cartSchema = new Schema({
    products: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'products',
            quantity: { type: Number, default: 1 }
        }],
        default: []
    }
});

export const CartModel = model(cartsCollection, cartSchema);