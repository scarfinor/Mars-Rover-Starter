// Command Class Initialized
class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }
}

// Properties Of Command Class From Message.js
//let modeCommand = new Command("MODE_CHANGE", "LOW_POWER");
//let moveCommand = new Command("MOVE", 12000);
//let STATUS_CHECK = new Command();

module.exports = Command;
