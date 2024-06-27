const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnect = require('./config/config');
const transactionRouter = require('./routes/apiRoutes');



const app = express();
dbConnect();

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'));

app.use('/api', transactionRouter);
const PORT = process.env.PORT || 8001;


app.listen(PORT,()=>{
    console.log("rox server is running on port", PORT)
})