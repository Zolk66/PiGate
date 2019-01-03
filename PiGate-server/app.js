const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const route = require('./controller/routes');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', route.main);
app.get('/buzzer/:comand', route.buzzer);
app.get('/sound', route.sound);
app.get('/presence', route.presece);

module.exports = app;
