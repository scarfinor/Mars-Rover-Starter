const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function () {
  const commandType = [
    new Command("MODE_CHANGE"),
    new Command("MOVE", 12000),
    new Command("STATUS_CHECK"),
  ];
  const value = "LOW_POWER";
  const command = new Command(commandType, value);
  let instantiateCommand = function () {
    new Command();
  };

  // Test 1
  test("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(instantiateCommand).toThrow(new Error("Command type required."));
  });

  // Test 2
  test("constructor sets command type", function () {
    expect(command.commandType).toEqual(commandType);
  });

  // Test 3
  test("constructor sets a value passed in as the 2nd argument", function () {
    expect(command.value).toEqual(value);
  });
});
