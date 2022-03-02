const express = require('express');
const app = express();
const mongoose = require('mongoose');

const hutangRoutes = require('./routes/hutang');

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
        app.listen(3030);
    })
    .catch((err) => {
        console.log('Connection failed!', err);
    });
