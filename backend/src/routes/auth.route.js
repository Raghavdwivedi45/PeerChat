import express from "express";
import { signup, login, logout, updateProfile, checkAuth } from "../controllers/auth.controller.js"; 
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);

router.get("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;