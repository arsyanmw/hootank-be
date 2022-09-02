const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

const hutangController = require('../controllers/transaksiHutang');

//GET
router.get('/list-hutang', hutangController.getListHutang);
router.get('/list-hutang-lunas', hutangController.getListHutangLunas);

//POST
router.post(
    '/add-hutang',
    [
        body('name').isString().withMessage('Nama tidak boleh mengandung angka'),
        body('product').isString().withMessage('Produk tidak boleh mengandung angka'),
        body('price').isNumeric().withMessage('Harga harus berupa angka'),
    ],
    hutangController.addHutang);

//DELETE
router.delete('/:hutangId', hutangController.deleteHutang);

module.exports = router;
