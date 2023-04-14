const { connect } = require("./client");
const { setupInput } = require("./input");
const { handleUserInput } = require("./input");

console.log("Connecting ...");
let connection = connect();

setupInput(connection);
handleUserInput();