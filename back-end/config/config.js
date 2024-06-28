require('dotenv').config();
const mongoose = require('mongoose');

const dbConnect = async () => {
    const URI = process.env.MONGO_URL;
    try{
        await mongoose.connect(URI);
        console.log("DB connected");
    }catch{
        console.log("DB connection failed");
    }
}

module.exports = dbConnect;