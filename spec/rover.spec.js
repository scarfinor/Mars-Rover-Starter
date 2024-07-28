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
  (rover.results = []),
    (rover.results[0] = { completed: true }),
    (rover.results[1] = {
      completed: true,
      roverStatus: { generatorWatts: 110, mode: "LOW_POWER", position: 98382 },
    });
  let response = rover.receiveMessage(message);
  let STATUS_CHECK = response.results[1];
  let MODE_CHANGE = response.results[1].completed;
  let MOVE = response.results[0];
  // Test 7
  test("constructor sets position and default values for mode and generatorWatts", function () {
    expect(Rover.position).toEqual(undefined);
    expect(Rover.mode).toEqual("Normal");
    expect(Rover.generatorWatts).toEqual(110);
  });
  // Test 8
  test("response returned by receiveMessage contains the name of the message", function () {
    expect(rover.receiveMessage(message)).toEqual(response);
  });
  // Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    expect(rover.results[0]).toEqual(response.results[0]);
    expect(rover.results[1]).toEqual(response.results[1]);
  });
  // Test 10
  test("responds correctly to the status check command", function () {
    expect(STATUS_CHECK).toEqual(response.results[1]);
  });
  // Test 11
  test("responds correctly to the mode change command", function () {
    expect(MODE_CHANGE).toBe(true);
  });
  // Test 12
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    expect(MOVE).toEqual(false);
  });
});
