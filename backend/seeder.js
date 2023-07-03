import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Meals from "./models/productModel.js";
import User from "./models/userModel.js";
import users from "./data/user.js"
import meals from "./data/products.js";


dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Meals.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUsers = createdUsers[0]._id;

        const sampleMeals = meals.map(meal => {
            return { ...meal, user: adminUsers };
        })

        await Meals.insertMany(sampleMeals);
        console.log(`Data Imported!`);
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Meals.deleteMany();
        await User.deleteMany();

        console.log(`Data Deleted!`);
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if(process.argv[2] != '-d') {
    importData();
} else {
    destroyData();
}