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

let modeCommand = new Command("MODE_CHANGE", "LOW_POWER");
let moveCommand = new Command("MOVE", 12000);
modeCommand.commandType = "MODE_CHANGE";
modeCommand.value = "LOW_POWER";
moveCommand.commandType = "MOVE";
moveCommand.commandType = 12000;
module.exports = Command;
