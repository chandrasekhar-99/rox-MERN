const dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose');

const dbConnect = () => {
    const URI = process.env.MONGO_URL;
    mongoose.connect(URI)
    .then(() => console.log("DB connected"))
    .catch(() => console.log("DB connection failed"))
}

module.exports = dbConnect;