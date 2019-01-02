const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sensor = require('./gpio/sensors');
let i2c = require('./gpio/ic2');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', sensor.hello);
app.get('/:comand', sensor.LED);

module.exports = app;
