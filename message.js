const Command = require("./command");
// Message Class Initialized
class Message {
  constructor(name, commands) {
    this.name = name;
    if (!name) {
      throw Error("Name required.");
    }
  }
}

// Properties Initialized For Command Class
//let name1 = new Message("name");
/*let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];*/
//console.log(name1);
//let message = new Message("Test message with two commands", commands);
module.exports = Message;
