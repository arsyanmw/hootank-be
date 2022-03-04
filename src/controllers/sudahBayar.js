const SudahBayar = require('../models/sudahBayar');
const TransaksiHutang = require('../models/hutang');

exports.addSudahBayar = (req, res) => {
    let dataHutang = "";
    const idHutang = req.params.hutangId

    TransaksiHutang.findOne({_id: idHutang})
        .then(hutang => {
            dataHutang = hutang;
        })
        .then(() => {
            const sudahBayar = new SudahBayar({
                hutangs_ids: idHutang
            });

            sudahBayar.save()
                .then(() => {
                    TransaksiHutang.findOneAndUpdate({_id: idHutang}, {
                        $set: {
                            status: 1
                        }
                    })
                        .then(() => {
                            res.status(200).json({
                                message: "Berhasil menambahkan data sudah bayar",
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: "Data hutang gagal diubah",
                                data: err
                            });
                        });
                })
                .catch(err => {
                    res.status(500).json({
                        message: "Data sudah bayar gagal ditambahkan",
                        data: err
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                message: "Data hutang gagal diambil",
                error: err
            });
        });
}
