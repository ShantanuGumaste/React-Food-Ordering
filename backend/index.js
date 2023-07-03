import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
dotenv.config()

const port = process.env.PORT;
const dev_env = process.env.NODE_ENV;

connectDB()

const app = express();

app.use(cors());

app.use('/api/products', productRoutes)

app.listen(port, ()=>{
    console.log(`The server is running in ${dev_env} mode on port ${port}`)
})