const sensors = require('./sensors');

let gpio = new sensors.Sensor(11, 13, 15);

let status = {
    sound: '',
    presence: ''
};

exports.main = function (req, res) {
    status.sound = gpio.sound();
    status.presence = gpio.presence();
    res.send( status );
};

exports.buzzer = function (req, res) {
    res.send( gpio.buzzer(req.params.comand) );
};

exports.sound = function (req, res) {
    res.send( gpio.sound() );
};

exports.presence = function (req, res) {
    res.send( gpio.presence() );
};