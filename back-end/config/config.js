const dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose');

/*const dbConnect = async () => {
    const URI = process.env.MONGO_URL;
    try{
        await mongoose.connect(URI);
        console.log("DB connected");
    }catch{
        console.log("DB connection failed");
    }
}*/

const dbConnect = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = dbConnect;