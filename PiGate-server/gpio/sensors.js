const gpio = require('rpi-gpio');

let pin = 7;   //Number of the pin at the GPIO
gpio.setup(pin, gpio.DIR_OUT, function() { console.log('GPIO started') });

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
