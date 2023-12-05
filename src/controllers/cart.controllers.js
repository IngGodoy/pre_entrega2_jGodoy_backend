import CartsManager from "../managers/cart.manager.js"


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

export const create = async (req, res)=>{
    try {
        const cart = await cartsManager.create();
        return res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    };
};

export const updateProductFromCart = async (req, res)=>{
    try {
        const {updateQuantity} = req.body;
        const cart = await cartsManager.updateProductFromCart(cid, pid, updateQuantity);
        if(!cart) return res.status(400).json({msg: "cart not fount"});
        else return res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    };
};

export const updateCart = async (req, res)=>{
    try {
        const {updateProducts} = req.body;
        const cart = await cartsManager.updateCart(updateProducts);
        if(!cart) return res.status(400).json({msg: "cart not fount"});
        else return res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    };
};

export const addProductToCart = async (req, res)=>{
    try {
        const {cid, pid} = req.params;
        const cart = await cartsManager.getById(cid);

        //verificar si el cart con _id existe
        if(!cart){
            return res.status(400).json({msg: "cart not fount"});
        }else{
            const checkProduct = cart.products.some((product)=>{
                return product._id === pid
            });
            
            //verificar si el producto ya fue agregado en el cart
            if(checkProduct) res.status(400).json({msg: "existing product"});
            else {
                await addProductToCart(cid, pid);
                return res.status(200).json({msg: "product added to cart"});
            };
        };  
    } catch (error) {
        console.log(error)
    };
};

export const removeAllProductsFromCart = async (req, res)=>{
    try {
        const {cid} = req.params;
        const cart = await cartsManager.removeAllProductsFromCart(cid);
        if(!cart) return res.status(400).json({msg: "cart not fount"});
        else return res.status(200).json(cart);
    } catch (error) {
        console.log(error)
    };
};

