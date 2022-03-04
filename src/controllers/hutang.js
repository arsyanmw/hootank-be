const {validationResult} = require('express-validator');

const TransaksiHutang = require('../models/hutang');

exports.getListHutang = (req, res, next) => {
    TransaksiHutang.find()
        .then((hutangs) => {
            res.status(200).json({
                message: 'Data Hutang berhasil diambil',
                data: hutangs
            });
        })
        .catch(err => {
            next(err);
        });
};

exports.addHutang = (req, res, next) => {
    //handle error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error('Data tidak valid');
        err.statusShop = 400;
        err.data = errors.array();
        throw err;
    }

    const hutang = new TransaksiHutang({
        name: req.body.name,
        product: req.body.product,
        price: req.body.price
    });

    hutang.save()
        .then(result => {
            res.status(201).json({
                message: 'Data Hutang berhasil ditambahkan',
                data: result
            });
        })
        .catch(err => {
            next(err);
        });
};
