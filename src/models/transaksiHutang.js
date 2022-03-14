const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransaksiHutang = new Schema({
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
    status: {
        type : Number,
        required : true,
        default : 0
    },
}, {
    timestamps : true
});

module.exports = mongoose.model('TransaksiHutang', TransaksiHutang);
