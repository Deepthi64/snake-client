const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.18.73.176",// IP address here,
    port: 50541 // PORT number here,
  });

  // event handler for when the connection is established
  conn.on("connect", () => {
    console.log("Connected to game server");
  });

  // event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = {connect};
