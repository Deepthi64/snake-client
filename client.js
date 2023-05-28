const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // event handler for when the connection is established
  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write("Name: SNK");
    conn.write("says: Hi there");
  });
  
  // event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };