import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
dotenv.config()

const port = process.env.PORT;
const dev_env = process.env.NODE_ENV;

connectDB();

const app = express();

app.use(cors());

app.use('/api/meals', productRoutes)

app.get('/api/meals/:id', async(req, res) => {
    const meal = await Meals.findById(req.params.id);
    res.json(meal)
})

app.listen(port, ()=>{
    console.log(`The server is running in ${dev_env} mode on port ${port}`)
})