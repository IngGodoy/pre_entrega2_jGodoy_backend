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
            return await CartModel.create(objeto);
        } catch (error) {
            console.log(error);
        };
    };


};