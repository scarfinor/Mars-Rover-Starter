const Message = require("./message");
const Command = require("./command");
class Rover {
  constructor(position, mode = "NORMAL", generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }
  receiveMessage(message) {
    let obj = message;
    for (let i = 0; i < commands.length; i++) {
      results.push(commands[i]);
    }
    return obj;
  }
}
let results = [];
let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];

module.exports = Rover;
