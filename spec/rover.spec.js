const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  let commands = [
    new Command("MODE_CHANGE", "LOW_POWER"),
    new Command("STATUS_CHECK"),
  ];
  let message = new Message("Test message with two commands", commands);
  let rover = new Rover(98382); // Passes 98382 as the rover's position.
  let results = [];
  function receiveMessage(message) {
    let obj = message;
    for (let i = 0; i < commands.length; i++) {
      results.push(commands[i]);
    }
    return obj;
  }
  let response = rover.receiveMessage(message);
  console.log(response);
  // Test 7
  test("constructor sets position and default values for mode and generatorWatts", function () {
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });
  // Test 8
  test("response returned by receiveMessage contains the name of the message", function () {
    expect(response).toEqual({
      commands: [
        { commandType: "MODE_CHANGE", value: "LOW_POWER" },
        { commandType: "STATUS_CHECK", value: undefined },
      ],
      name: "Test message with two commands",
    });
  });
  // Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    expect(response).toContain();
  });
});
