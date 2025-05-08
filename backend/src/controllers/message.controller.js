import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: {$ne:loggedInUserId} }).select("-password");
        res.status(200).json(filteredUsers);
    } catch(err) {
        console.log("Errors in message.controller.js -> getUsersForSidebar: ", err.message);
        res.status(500).json({ error : "Internal server error." });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: msgSentTo } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [ { senderId: myId, receiverId: msgSentTo }, { senderId: msgSentTo, receiverId: myId }]
        })

        res.status(200).json(messages);
    } catch(err) {
        console.log("Error in getMessages controller. ", err.message);
        res.status(500).json({ error : "Internal server error." });
    }
}

export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let imageURL;
        if(image) {
            const uploadResponse = await cloudinary.uploader.upload(profilePic);
            imageURL = uploadResponse.secure_url;
        }
        const newMsg = new Message({
            senderId,
            receiverId,
            text, 
            image: imageURL
        });

        await newMsg.save();
        res.status(201).json(newMsg);
    } catch(err) {
        console.log("Error in getMessages controller. ", err.message);
        res.status(500).json({ error : "Internal server error." });
    }
}