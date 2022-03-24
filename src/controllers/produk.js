const Produk = require('../models/produk');
const {validationResult} = require("express-validator");

exports.getListProduk = (req, res, next) => {
    Produk.find({})
        .then((produks) => {
            res.status(200).json({
                message: 'Data Produk berhasil diambil',
                data: produks
            });
        })
        .catch(err => {
            next(err);
        });
};

exports.addProduk = (req, res, next) => {
    //handle error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error('Data tidak valid');
        err.statusCode = 400;
        err.data = errors.array();
        throw err;
    }

    const produk = new Produk({
        key: req.body.key,
        nama_produk: req.body.nama_produk,
    });

    produk.save()
        .then(result => {
            res.status(201).json({
                message: 'Data Produk berhasil ditambahkan',
                data: result
            });
        })
        .catch(err => {
            next(err);
        });
};
