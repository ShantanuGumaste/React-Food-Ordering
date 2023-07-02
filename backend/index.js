import express from "express"
import cors from "cors"
import products from "./data/products.js"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT;
const dev_env = process.env.NODE_ENV;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send(products)
});

app.listen(port, ()=>{
    console.log(`The server is running in ${dev_env} mode on port ${port}`)
})