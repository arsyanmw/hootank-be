const {validationResult} = require('express-validator');

const TransaksiHutang = require('../models/transaksiHutang');
const SudahBayar = require('../models/sudahBayar');

exports.getListHutang = (req, res, next) => {
    TransaksiHutang.find({status: {$in:0}})
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

exports.getListHutangLunas = (req, res, next) => {
    TransaksiHutang.find({status: {$in:1}}).sort({createdAt: -1})
        .then((hutangs) => {
            res.status(200).json({
                message: 'Data Hutang Lunas berhasil diambil',
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

exports.deleteHutang = (req, res, next) => {
    const idHutang = req.params.hutangId;

    TransaksiHutang.deleteOne({_id: idHutang})
        .then(() => {
            SudahBayar.deleteOne({hutangs_ids: idHutang})
                .then(() => {
                    res.status(200).json({
                        message: 'Data Hutang berhasil dihapus',
                    });
                })
                .catch(err => {
                    next(err);
                });
        })
        .catch(err => {
            next(err);
        });
};
