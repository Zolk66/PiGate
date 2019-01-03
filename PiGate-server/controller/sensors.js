const gpio = require('rpi-gpio');

const Sensor = class Sensor {

    constructor(buzzer, sound, presence) {
        this.buzzer = buzzer;       //Buzzer actuator (output)
        this.sound = sound;         //Sound sensor (input)
        this.presence = presence;   //Presence sensor (input)
        this.setup();
    }

    setup() {
        gpio.setup(buzzer, gpio.DIR_OUT, function() { console.log('Buzzer actuator started') });
        gpio.setup(sound, gpio.DIR_IN, function() { console.log('Sound sensor started') });
        gpio.setup(presence, gpio.DIR_IN, function() { console.log('Presense sensor started') });
    }

    buzzer(comand) {
        if(comand === 'on') {
            gpio.write(buzzer, 1);  // High Voltage
            return 'Buzzer on!';
        }
        else if(comand === 'off'){
            gpio.write(buzzer, 0);  // Low Voltage
            return 'Buzzer off!';
        }
        else {
            return 'Comand not found';
        }
    }

    sound() {
        gpio.read(sound, function (err, data) {
            console.log('Sound: ' + data);
            return data;
        });
    }

    presence() {
        gpio.read(presence, function (err, data) {
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
