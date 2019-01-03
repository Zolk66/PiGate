const gpio = require('rpi-gpio');

const Sensor = class Sensor {

    constructor(buzzer, sound, presence) {
        this._buzzer = buzzer;       //Buzzer actuator (output)
        this._sound = sound;         //Sound sensor (input)
        this._presence = presence;   //Presence sensor (input)
        this.setup();
    }

    setup() {
        gpio.setup(this._buzzer, gpio.DIR_OUT, function() { console.log('Buzzer actuator started') });
        gpio.setup(this._sound, gpio.DIR_IN, function() { console.log('Sound sensor started') });
        gpio.setup(this._presence, gpio.DIR_IN, function() { console.log('Presense sensor started') });
    }

    buzzer(comand) {
        if(comand === 'on') {
            gpio.write(this._buzzer, 1);  // High Voltage
            return 'Buzzer on!';
        }
        else if(comand === 'off'){
            gpio.write(this._buzzer, 0);  // Low Voltage
            return 'Buzzer off!';
        }
        else {
            return 'Comand not found';
        }
    }

    sound() {
        gpio.read(this._sound, function (err, data) {
            console.log('Sound: ' + data);
            return data;
        });
    }

    presence() {
        gpio.read(this._presence, function (err, data) {
            console.log('Presence: ' + data);
            return data;
        });
    }

    destroy() {
        gpio.destroy(function() { console.log('GPIO stopped') });
    }
};

module.exports = {
    Sensor:Sensor
};


//gpio.write(pin, 0);   // Low Voltage
//gpio.write(pin, 1);   // High Voltage
