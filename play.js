const { connect } = require("./client");
const { handleUserInput } = require("./client");

console.log("Connecting ...");
const conn = connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};
setupInput();
