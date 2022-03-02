const Hutang = require('../models/hutang');

exports.getListHutang = (req, res, next) => {
    Hutang.find()
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
