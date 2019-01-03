const gpio = require('rpi-gpio');

let buzzer = 16;    //Buzzer actuator (output)
let presence = 20;  //Presence sensor (input)
let sound = 21;     //Sound sensor (input)

gpio.setup(buzzer, gpio.DIR_OUT, function() { console.log('Buzzer actuator started') });
gpio.setup(presence, gpio.DIR_IN, function() { console.log('Presense sensor started') });
gpio.setup(sound, gpio.DIR_IN, function() { console.log('Sound sensor started') });

//gpio.write(pin, 0);	// Low Voltage
//gpio.write(pin, 1);	// High Voltage

exports.hello = function (req, res) {
    gpio.destroy(function() { console.log('GPIO stopped') });
    res.send('GPIO stopped!')
};

exports.LED = function (req, res) {
    if(req.params.comand === 'on') {
        gpio.write(pin, 1);	// High Voltage
        res.send('LED on!');
    }
    else if(req.params.comand === 'off'){
        gpio.write(pin, 0);	// Low Voltage
        res.send('LED off!');
    }
    else {
        res.send('Comand not found');
    }
};

exports.sound = function (req, res) {
    gpio.read(sound, function (err, data) {
        console.log(err);
        console.log(data);
        res.send(data);
    });
};
