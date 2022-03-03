const express = require('express');
const app = express();
const mongoose = require('mongoose');
let port = process.env.PORT || 3030;

const hutangRoutes = require('./src/routes/hutang');

// handle cors header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', hutangRoutes);

mongoose.connect('mongodb+srv://arsyan:FdjMdxQ60Rs76AQh@cluster0.dufwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        app.listen(port);
    })
    .catch((err) => {
        console.log('Connection failed!', err);
    });
