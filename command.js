class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }
}
// Initialize Command Type
//let modeCommand = new Command("MODE_CHANGE", "LOW_POWER");
//let moveCommand = new Command("MOVE", 12000);
//let STATUS_CHECK = new Command();

//Test

module.exports = Command;
