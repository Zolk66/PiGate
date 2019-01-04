const sensors = require('./sensors');

let gpio = new sensors.Sensor(11, 13, 15);
let timeResponse = 500; // miliseconds

const main = function main (req, res) {
    gpio.sound();
    gpio.presence();
    setTimeout(function () { res.send( gpio.stauts ) }, timeResponse);
};

const buzzer = function buzzer (req, res) {
    res.send( gpio.buzzer(req.params.comand) );
};

const sound = function sound (req, res) {
    gpio.sound();
    setTimeout(function () { res.send( gpio.stauts.sound ) }, timeResponse);
};

const presence = function presence (req, res) {
    gpio.presence();
    setTimeout(function () { res.send( gpio.stauts.presence ) }, timeResponse);
};

module.exports = {
    main: main,
    buzzer: buzzer,
    sound: sound,
    presence: presence
};