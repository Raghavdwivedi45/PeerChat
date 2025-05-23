import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from 'url';

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, io, server } from "./lib/socket.js";
import path from "path";

dotenv.config();


app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS,
    credentials: true
}))


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


if(process.env.NODE_ENV==="production") {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const viteBuildPath = path.join(__dirname, '../frontend/vite-project/dist');
    app.use(express.static(viteBuildPath));

    app.get('*', (req, res) => {
    res.sendFile(path.join(viteBuildPath, 'index.html'));
    });
}


server.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
    connectDB();
});


