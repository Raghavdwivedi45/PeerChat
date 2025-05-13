import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "user3@example.com",
    fullName: "user3",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "user4@example.com",
    fullName: "user4",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "user5@example.com",
    fullName: "user5",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "user6@example.com",
    fullName: "user6",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "user7@example.com",
    fullName: "user7",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "user8@example.com",
    fullName: "user8",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
 
];

const initDB = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error in database:", error);
  }
};

// Call the function
initDB();