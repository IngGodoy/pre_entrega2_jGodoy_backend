import { Router } from "express";
import {
    getAllCarts,
    getCartById,
    deletProductByIdFromCart


} from "../controllers/cart.controllers.js";

const router = Router();

router.get("/", getAllCarts);

router.get("/:cid", getCartById);

router.delete("/:cid/products/:pid", deletProductByIdFromCart);

export default router;