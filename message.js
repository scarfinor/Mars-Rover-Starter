const Command = require("./command");
// Message Class Initialized
class Message {
  constructor(name, commands) {
    this.name = name;
    if (!name) {
      throw Error("Name required.");
    }
    this.name = name;
    this.commands = commands;
  }
}

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];
let message = new Message("Test message with two commands", commands);

module.exports = Message;
