const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SudahBayar = new Schema({
    hutangs_ids : {
        type : String,
        required : true
    },
}, {
    timestamps : true
});

module.exports = mongoose.model('SudahBayar', SudahBayar);
