import {CartModel} from "../models/carts.moldel.js"

export default class CartsManager {
    async getAll(){
        try {
            return await CartModel.find();
        } catch (error) {
            console.log(error);
        };
    };

    async getById(cid){
        try {
            return await CartModel.findById(cid);
        } catch (error) {
            console.log(error);
        };
    };

    //borrar el producto de un carro
    async deletProductByIdFromCart(cid, pid){
        try {

            return await CartModel.updateOne(
                { _id: cid },
                { products: { $pull: { _id: pid } } },
                { new: true }
            )
            
        } catch (error) {
            console.log(error);
        };
    };

    async create(){
        try {
            return await CartModel.create();
        } catch (error) {
            console.log(error);
        };
    };

    //actualizar la cantidad de un producto en el cart
    async updateProductFromCart(cid, pid, updateQuantity) {
        try {
            return await CartModel.updateOne(
                { _id: cid, 'products._id': pid },
                { $set: { 'products.$.quantity': updateQuantity } },
                { new: true }
            );
        } catch (error) {
            console.log(error);
        };
    };

    //actualizar array de productos del cart
    async updateCart(cid, updateProducts) {
        try {
            return await CartModel.updateOne(
                { _id: cid },
                { $set: { 'products': updateProducts } },
                { new: true }
            );
        } catch (error) {
            console.log(error);
        };
    };

    async addProductToCart(cid, pid) {
        try {
            return await CartModel.updateOne(
                { _id: cid },
                { $push: { products: pid } },
                { new: true }
            );
        } catch (error) {
            console.log(error);
        };
    }; 

    async removeAllProductsFromCart(cid){
        try {
            return await CartModel.updateOne(
                { _id: cid },
                { $set: { products: [] } },
                { new: true }
            );  
        } catch (error) {
            console.log(error);
        };
    };
};