// configuraciones para levantar el servidor
import express from "express";
import {initMongoDb} from "./db/connetion.js"
import productsRouter from "./routes/products.roter.js"
import cartsRouter from "./routes/carts.router.js"


const app = express();

app.use(express.json()); // me permite ver los body req
app.use(express.urlencoded({ extended: true })); // nos permite recibir req.body

const PORT = 8080;

app.use("/api/products", productsRouter); //rutas del crud productos

app.use("/api/carts", productsRouter); //rutas del crud carts

initMongoDb(); //función que mantiene la conexión con MongoDb
app.listen(PORT, ()=> console.log("SERVER UP ON PORT" + PORT)); //levantar el servidor...
