import {CartModel} from "../models/carts.moldel.js"

export default class CartsManager {
    async getAll(){
        try {
            return await CartModel.find();
        } catch (error) {
            console.log(error);
        };
    };

    async getById(id){
        try {
            return await CartModel.findById(id);
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