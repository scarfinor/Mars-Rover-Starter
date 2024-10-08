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
    let message = new Message("Test message with two commands");
    expect(message.name).toBe("Test message with two commands");
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
    let STATUS_CHECK = rover.roverStatus(response);
    expect(STATUS_CHECK.results[0].completed).toBe(true);
    expect(STATUS_CHECK.results[1].roverStatus).toEqual({
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
    let MODE_CHANGE = rover.roverMode_Change(response);
    expect(MODE_CHANGE.results[0].completed).toBe(false);
    expect(MODE_CHANGE.results[1].roverStatus.mode).toBe("LOW_POWER");
    expect(rover.mode).toEqual("LOW_POWER");
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
    let MOVE = rover.roverMove(response);
    expect(MOVE.results[2].completed).toBe(false);
    expect(MOVE.results[1].roverStatus.mode).toBe("LOW_POWER");
  });
  // Test 13
  test("responds with the position for the move command", function () {
    let moveCommand = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 12000),
    ];
    let message = new Message("Move command message", moveCommand);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    let MOVE = rover.roverMove(response);
    expect(MOVE.results[0].completed).toBe(true);
    expect(MOVE.results[1].roverStatus.position).toBe(12000);
  });
});
