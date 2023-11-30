import {ProductModel} from "../models/product.model.js"; 

export default class ProductsManager {
    
    async getAll(){
        try {
            return await ProductModel.find();
        } catch (error) {
            console.log(error);
        };
    };

    async getById(id){
        try {
            return await ProductModel.findById(id);
        } catch (error) {
            console.log(error);
        };
    };

    async create(objeto){
        try {
            console.log("objeto en el manager", objeto); //borrar
            return await ProductModel.create(objeto);
        } catch (error) {
            console.log(error);
        };
    };

    async update(id, product){
        try {
            return await ProductModel.findByIdAndUpdate({_id : id}, product, {new: true}); 
            //new true retorne el objeto
        } catch (error) {
            console.log(error);
        };
    };

    async delet(id){
        try {
            return await ProductModel.findByIdAndDelete(id); 
        } catch (error) {
            console.log(error);
        };
    };

};