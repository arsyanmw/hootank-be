const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Produk = new Schema({
    key : {
        type : String,
        required : true
    },
    nama_produk : {
        type : String,
    },
}, {
    timestamps : true
});

module.exports = mongoose.model('Produk', Produk);
