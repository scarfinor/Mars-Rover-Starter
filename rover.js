const Message = require("./message.js");
const Command = require("./command.js");
class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    let results = [];

    for (let command of message.commands) {
      if (command.commandType === "MOVE") {
        if (this.mode === "LOW_POWER") {
          results.push({ completed: false });
        } else {
          this.position = command.value;
          results.push({ completed: true });
        }
      } else if (command.commandType === "STATUS_CHECK") {
        results.push({
          completed: true,
          roverStatus: {
            mode: this.mode,
            position: this.position,
            generatorWatts: this.generatorWatts,
          },
        });
      } else if (command.commandType === "MODE_CHANGE") {
        this.mode = command.value;
        results.push({
          completed: true,
          roverStatus: {
            mode: this.mode,
            position: this.position,
            generatorWatts: this.generatorWatts,
          },
        });
      } else {
        results.push({ completed: false });
      }
    }

    return {
      message: message.name,
      results: results,
    };
  }

  roverStatus(response) {
    commands.commandType = "STATUS_CHECK";
    let obj = {};
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
    return obj;
  }
  roverMode_Change(response) {
    let obj = {};
    obj.results = [];

    if (modeCommand.commandType === "MODE_CHANGE") {
      obj.results.push({ completed: false });
      obj.results.push({ roverStatus: { mode: "LOW_POWER" } });
    }
    if (Rover.mode === "NORMAL") {
      obj.results.push({ completed: true });
      obj.results.push({ roverStatus: { mode: "NORMAL" } });
    }
    return obj;
  }

  roverMove(response) {
    moveCommand.commandType = "MOVE";
    let obj = {};
    obj.results = [];

    if (moveCommand.commandType === "MOVE") {
      obj.results.push({ completed: true });
      obj.results.push({ roverStatus: { mode: "LOW_POWER", position: 12000 } });
      if (modeCommand.value === "LOW_POWER") {
        obj.results.push({ completed: false });
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
let STATUS_CHECK = rover.roverStatus(response);
let MODE_CHANGE = rover.roverMode_Change(response);
let MOVE = rover.roverMove(response);

console.log(response);
console.log("===========");
console.log(MODE_CHANGE);
console.log("-----------");
console.log(MODE_CHANGE.results);
console.log("===========");
console.log(MOVE);
console.log("-----------");
console.log(MOVE.results);
console.log("===========");

module.exports = Rover;
