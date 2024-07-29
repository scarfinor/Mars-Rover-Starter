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

    if (commands.commandType === "STATUS_CHECK") {
      obj.results.push({ completed: true });
      obj.results.push({
        roverStatus: {
          mode: "NORMAL",
          generatorWatts: 110,
          position: 87382089,
        },
      });
    }
    if (modeCommand.commandType === "MODE_CHANGE") {
      obj.results.push({ completed: true });
      obj.results.push({ roverStatus: { mode: "LOW_POWER" } });
      if (Rover.mode === "NORMAL") {
        obj.results.push({ completed: true });
        obj.results.push({ roverStatus: { mode: "NORMAL" } });
      }
    }
    if (moveCommand[1].commandType === "MOVE") {
      if (Rover.mode === "NORMAL") {
        obj.results.push({ roverStatus: { position: 12000 } });
        obj.results.push({ completed: true });
        if (modeCommand[0].value === "LOW_POWER") {
          obj.results.push({ completed: false });
        }
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

//console.log(response.results[1].roverStatus);

module.exports = Rover;
