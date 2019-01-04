const sensors = require('./sensors');

let gpio = new sensors.Sensor(11, 13, 15);

const main = function main (req, res) {
    res.send( gpio.stauts );
};

const buzzer = function buzzer (req, res) {
    res.send( gpio.buzzer(req.params.comand) );
};

const sound = function sound (req, res) {
    gpio.sound();
    setTimeout(function () { res.send( gpio.stauts.sound ) }, 500);
};

const presence = function presence (req, res) {
    setTimeout(function () { res.send( gpio.stauts.presence ) }, 500);
};

module.exports = {
    main: main,
    buzzer: buzzer,
    sound: sound,
    presence: presence
};