const express = require('express');
const router = express.Router();

const sudahBayarController = require('../controllers/sudahBayar');


router.put(
    '/:hutangId',
    sudahBayarController.addSudahBayar
);

module.exports = router;
