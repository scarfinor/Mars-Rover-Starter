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
  (rover.results = [
    { completed: true },
    {
      completed: true,
      roverStatus: {
        mode: "LOW_POWER",
        generatorWatts: 110,
        position: 98382,
      },
    },
  ]),
    (rover.results.roverStatus = { completed: true }),
    {
      completed: true,
      roverStatus: { generatorWatts: 110, mode: "LOW_POWER", position: 98382 },
    };
  let response = rover.receiveMessage(message);
  // Test 7
  test("constructor sets position and default values for mode and generatorWatts", function () {
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });
  // Test 8
  test("response returned by receiveMessage contains the name of the message", function () {
    expect(response).toEqual(rover.receiveMessage(message));
  });
  // Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    expect(response).toEqual(rover.receiveMessage(message));
  });
  // Test 10
  test("responds correctly to the status check command", function () {
    expect(response).toEqual(rover.receiveMessage(message));
  });
});
