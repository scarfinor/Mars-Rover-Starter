const Message = require("./message.js");
const Command = require("./command.js");
class Rover {
  constructor(position, mode, generatorWatts) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }

  receiveMessage(message) {
    let obj = {};
    obj.message = "Test message with two commands";
    obj.results = [];
    obj.results.push({
      completed: true,
    });
    obj.results.push({
      completed: true,
      roverStatus: {
        mode: "LOW_POWER",
        generatorWatts: 110,
        position: 98382,
      },
    });
    return obj;
  }
}

this.mode = "NORMAL";
this.generatorWatts = 110;

let modeCommand = new Command("MODE_CHANGE", "LOW_POWER");
let moveCommand = new Command("MOVE", 12000);

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];

let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

console.log(response);

let STATUS_CHECK = response.results[1];
Command.STATUS_CHECK = STATUS_CHECK;
let MODE_CHANGE = response.results[1].completed;
let MOVE = response.results[0];
let restrictions = "LOW_POWER: " + "Cant be moved in this state.";

if (response.results[1].roverStatus.mode === "LOW_POWER") {
  (MOVE = false), +response.results[1].roverStatus;
}
console.log(restrictions);

if (response.results[1].roverStatus.mode === "NORMAL") {
  (response.results[1].roverStatus.completed = true),
    +response.results[1].roverStatus;
}
console.log(rover.receiveMessage(message).results[1]);
console.log(Command.STATUS_CHECK);
console.log(MODE_CHANGE);
console.log(MOVE);
console.log(response.results[1].roverStatus.mode);
console.log(this.mode);

module.exports = Rover;
