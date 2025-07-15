import restaurantController from "../controllers/restaurant.controller.js"; // แก้ชื่อ import

import express from "express";
const router = express.Router();

// POST https://localhost:5000/api/v1/restaurant
router.post("/", restaurantController.create);

export default router; // แก้ชื่อให้ตรงกับที่ประกาศไว้
