const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hutang = new Schema({
    name : {
        type : String,
        required : true
    },
    product: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
}, {
    timestamps : true
});

module.exports = mongoose.model('Hutang', Hutang);
