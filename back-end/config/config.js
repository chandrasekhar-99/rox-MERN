const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false
        });
        console.log("DB connected");
    }catch{
        console.log("DB connection failed");
        process.exit(1);
    }
}

module.exports = dbConnect;