const Message = require("./message.js");
const Command = require("./command.js");
class Rover {
  constructor(position, mode = "NORMAL", generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }
  receiveMessage(message) {
    let obj = message;
    roverStatus = {
      position: this.position,
      mode: this.mode,
      generatorWatts: this.generatorWatts,
    };
    results.push(roverStatus);
    results.push(commands);
    return obj;
  }
}

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];

let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // Passes 98382 as the rover's position.
let results = [];
roverStatus = {};
message.results = results;
let response = rover.receiveMessage(message);
console.log(response);
module.exports = Rover;
