const dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose');

const dbConnect = async () => {
    const mongo_url = process.env.MONGO_URL;
    mongoose.connect(mongo_url)
    .then(() => console.log("DB connected"))
    .catch(() => console.log("DB connection failed"))
}

module.exports = dbConnect;