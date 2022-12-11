const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const { DB_URL, PORT } = process.env;

const hutangRoutes = require('./src/routes/hutang');
const sudahBayarRoutes = require('./src/routes/sudahBayar');
const produkRoutes = require('./src/routes/produk');

// handle cors header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());

app.use('/hutang', hutangRoutes);
app.use('/sudah-bayar', sudahBayarRoutes);
app.use('/produk', produkRoutes);

app.use((err, req, res) => {
    const status = err.statusCode || 500;
    const message = err.message;
    const data = err.data;

    res.status(status).json({
        message: message,
        data: data
    });
});

mongoose.connect('mongodb+srv://arsyan:FdjMdxQ60Rs76AQh@cluster0.dufwc.mongodb.net/hutang?retryWrites=true&w=majority')
    .then(() => {
        app.listen(process.env.PORT || 3030);
    })
    .catch((err) => {
        console.log('Connection failed!', err);
    });
