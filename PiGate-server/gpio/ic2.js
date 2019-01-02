const i2c = require('i2c-bus');

let i2c_Bus = i2c.openSync(1);
let arduino_address = 0x04;

//The Register is where we send our 1 to tell our slave to read or a 0 to send data to.
let register = 0x00;

//We need to identify the size of our message we are sending to the slave. So that we can send the end of transmission bit.
let length = 0x07;

//We use a Buffer to transport Binary Data
const data = new Buffer([0,1,2,3,4,5,6]);

//This is What your Buffer should look like
console.log(data);

//Here is your i2c Write command
i2c_Bus.i2cWriteSync(arduino_address, length, data);

//while( i2c_Bus.i2cReadSync(arduino_address, length , data) );