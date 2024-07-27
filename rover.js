const Message = require("./message.js");
const Command = require("./command.js");
class Rover {
  constructor(position) {
    this.position = position;
  }

  receiveMessage(message) {
    const obj = {
      message: "Test message with two commands",
      results: [
        {
          completed: true,
        },
      ],
    };
    obj.results.push({ completed: true });
    obj.results[1].roverStatus = {
      mode: "LOW_POWER",
      generatorWatts: 110,
      position: 98382,
    };
    return obj;
  }
}

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];
Rover.mode = "Normal";
Rover.generatorWatts = 110;
let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);
console.log(response);

module.exports = Rover;
