const Sensor = require('./sensors').Sensor;

let gpio = new Sensor(11, 13, 15);

const main = function main (req, res) {
    res.send( gpio.stauts );
};

const buzzer = function buzzer (req, res) {
    res.send( gpio.stauts.sound );
};

const sound = function sound (req, res) {
    res.send( gpio.stauts.sound );
};

const presence = function presence (req, res) {
    res.send( gpio.stauts.presence );
};

module.exports = {
    main: main,
    buzzer: buzzer,
    sound: sound,
    presence: presence
};