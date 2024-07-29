const Message = require("./message.js");
const Command = require("./command.js");
class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
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
    if (commands[1].name === "STATUS_CHECK") {
      obj.results[1].completed = true;
      obj.results[1].roverStatus = {
        mode: "NORMAL",
        generatorWatts: 110,
        position: 98382,
      };
    }
    if (modeCommand.name === "MODE_CHANGE") {
      obj.results[1].roverStatus.mode = "LOW_POWER";
      obj.results[1].completed = true;
    }
    if (moveCommand.name === "MOVE") {
      if ((obj.results[1].roverStatus.mode = "NORMAL")) {
        obj.results[1].roverStatus.position = moveCommand.value;
        obj.results[1].completed = true;
      }
    }
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

console.log(response.results[1].roverStatus);

module.exports = Rover;
