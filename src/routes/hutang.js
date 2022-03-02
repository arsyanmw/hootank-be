const express = require('express');
const router = express.Router();

const hutangController = require('../controllers/hutang');

router.get('/list-hutang', hutangController.getListHutang);

module.exports = router;
