const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

const produkController = require('../controllers/produk');

//GET
router.get('/list-produk', produkController.getListProduk);

//POST
router.post(
    '/add-produk',
    [
        body('key').isString().withMessage('Key tidak boleh mengandung angka'),
        body('key').isLowercase().withMessage('Key tidak boleh huruf kapital'),
        body('key').not().isEmpty().withMessage('Key tidak boleh kosong'),
        body('nama_produk').isString().withMessage('Produk tidak boleh mengandung angka'),
        body('nama_produk').not().isEmpty().withMessage('Key tidak boleh kosong'),
    ],
    produkController.addProduk);

module.exports = router;
