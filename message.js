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

module.exports = Message;
