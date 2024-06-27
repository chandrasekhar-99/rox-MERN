const dotenv = require('dotenv')
dotenv.config();
const express = require('express');

const cors = require('cors');
const dbConnect = require('./config/config');
const transactionRouter = require('./routes/apiRoutes');

const app = express();
app.use(express.json());


app.use(
    cors({
        origin:"*",
    })
)

let PORT = process.env.PORT || 8001;


app.get("/", (req, res) => {
    res.json("Hello World !");
});

app.use('/api', transactionRouter);



app.listen(PORT, async ()=>{
    try{
        await dbConnect;
        console.log("connect to mongodb");

    }catch(error){
        console.log(error);
    }
    console.log("rox server is running on port", PORT)
})