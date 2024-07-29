const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  // Test 7
  test("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover(98382);
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });
  // Test 8
  test("response returned by receiveMessage contains the name of the message", function () {
    let commands = [];
    let message = new Message("Test message with two commands");
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.message).toBe("Test message with two commands");
  });
  // Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toBe(2);
  });
  // Test 10
  test("responds correctly to the status check command", function () {
    let commands = [new Command("STATUS_CHECK")];
    let message = new Message("Status check message", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(true);
    expect(response.results[1].roverStatus).toEqual({
      mode: "NORMAL",
      generatorWatts: 110,
      position: 87382089,
    });
  });
  // Test 11
  test("responds correctly to the mode change command", function () {
    let modeCommand = [new Command("MODE_CHANGE", "LOW_POWER")];
    let message = new Message("Mode change message", modeCommand);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(false);
    expect(response.results[0].completed).toBe(true);
    expect(response.results.roverStatus.mode).toBe("LOW_POWER");
    expect(response.results.roverStatus.mode).toBe("NORMAL");
  });
  // Test 12
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let modeCommand = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 12000),
    ];
    let message = new Message("Move in low power mode message", modeCommand);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[1].completed).toBe(false);
    expect(rover.position).toBe(98382);
  });
  // Test 13
  test("responds with the position for the move command", function () {
    let moveCommand = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 12000),
    ];
    let message = new Message("Move command message", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(true);
    expect(rover.position).toBe(12000);
  });
});
