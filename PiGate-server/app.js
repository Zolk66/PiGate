const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sensor = require('./gpio/sensors');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', sensor.hello);
app.get('/buzzer/:comand', sensor.buzzer);
app.get('/sound', sensor.sound);
app.get('/presence', sensor.presece);

module.exports = app;
