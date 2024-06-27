const mongoose = require('mongoose')

const RoxDataSchema = new mongoose.Schema({
    id:{type: Number, required: true},
    title:{type: String, required: true},
    price:{type: Number, required: true},
    description:{type: String, required: true},
    category:{type: String, required: true},
    image:{type: String, required: true},
    sold:{type: Boolean},
    dateOfSale: { type: Date, required: true }
	
});


module.exports = mongoose.model('roxColl',RoxDataSchema);
