import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) return res.status(400).json({ message: "Login to continue." });

        const decoded = jwt.verify(token, process.env.JSON_SECRET);
        if(!decoded) return res.status(401).json({ message: "Invalid token." });

        const user = await User.findById(decoded.userId).select("-password");
        if(!user) return res.status(400).json({ message: "Create an account to continue." });

        req.user = user;
        next();

    } catch(err) {
        console.log(err);
    }
}

