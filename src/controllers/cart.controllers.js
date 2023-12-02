import {CartsManager} from "../managers/cart.manager.js"

const cartsManager = new CartsManager();

export const getAllCarts = async (req, res)=>{
    try {
        
        const carts = await cartsManager.getAll();
        return res.status(200).json(carts);

    } catch (error) {
        console.log(error)
    };

};

export const getCartById = async (req, res)=>{
    try {
        const {cid} = req.params;
        const cart = await cartsManager.getById(cid);
        if(!cart) return res.status(400).json({msg: "cart not fount"});
        else return res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    };
};

export const deletProductByIdFromCart = async (req, res)=>{
    try {
        const {cid, pid} = req.params;
        const cart = await cartsManager.deletProductByIdFromCart(cid, pid);
        if(!cart) return res.status(400).json({msg: "cart not fount"});
        else return res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    };
};

