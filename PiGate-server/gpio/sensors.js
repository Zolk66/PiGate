const gpio = require('rpi-gpio');

let buzzer = 11;    //Buzzer actuator (output)
let sound = 13;     //Sound sensor (input)
let presence = 15;  //Presence sensor (input)

gpio.setup(buzzer, gpio.DIR_OUT, function() { console.log('Buzzer actuator started') });
gpio.setup(presence, gpio.DIR_IN, function() { console.log('Presense sensor started') });
gpio.setup(sound, gpio.DIR_IN, function() { console.log('Sound sensor started') });

//gpio.write(pin, 0);   // Low Voltage
//gpio.write(pin, 1);   // High Voltage

exports.hello = function (req, res) {
    gpio.destroy(function() { console.log('GPIO stopped') });
    res.send('GPIO stopped!')
};

exports.buzzer = function (req, res) {
    if(req.params.comand === 'on') {
        gpio.write(buzzer, 1);  // High Voltage
        res.send('Buzzer on!');
    }
    else if(req.params.comand === 'off'){
        gpio.write(buzzer, 0);  // Low Voltage
        res.send('Buzzer off!');
    }
    else {
        res.send('Comand not found');
    }
};

exports.sound = function (req, res) {
    gpio.read(sound, function (err, data) {
        console.log(data);
        res.send(data);
    });
};

exports.presece = function (req, res) {
    gpio.read(presence, function (err, data) {
        console.log(data);
        res.send(data);
    });
};

