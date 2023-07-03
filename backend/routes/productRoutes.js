import express from "express"
import asyncHandler from "../middleware/asyncHandler.js";
import Meals from "../models/productModel.js";

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const meals = await Meals.find({});
    res.json(meals)
}));

export default router