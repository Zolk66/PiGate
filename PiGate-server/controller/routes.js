const Sensor = require('./sensors').Sensor;

let gpio = new Sensor(11, 13, 15);

let status = {
    sound: '',
    presence: ''
};

const main = function main (req, res) {
    status.sound = gpio.sound();
    status.presence = gpio.presence();
    res.send( status );
};

const buzzer = function buzzer (req, res) {
    res.send( gpio.buzzer(req.params.comand) );
};

const sound = function sound (req, res) {
    res.send( gpio.sound() );
};

const presence = function presence (req, res) {
    res.send( gpio.presence() );
};

module.exports = {
    main: main,
    buzzer: buzzer,
    sound: sound,
    presence: presence
};