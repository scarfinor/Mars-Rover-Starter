const Message = require("../message.js");
const Command = require("../command.js");
const message = require("../message.js");
// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {
  let instantiateName = function () {
    new Message();
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
  };
  // Test 4
  test("throws error if a name is NOT passed into the constructor as the first parameter", function () {
    expect(instantiateName).toThrow(new Error("Name required."));
  });
  // Test 5
  test("constructor sets name", function () {
    expect(message.name).toEqual(Message.name);
  });
  //Test 6
  test("constructor sets a value passed in as the 2nd argument", function () {
    expect(message.commands).toEqual(Message.commands);
  });
});
