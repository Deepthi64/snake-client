const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.18.73.176",
    port: 50541,
  });
  
  // event handler for when the connection is established
  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write('Name: SNK');

    let direction;

    // move up every 50ms
    setInterval(() => {
      if (direction === "up") {
        conn.write("Move: up");
      } else if (direction === "left") {
        conn.write("Move: left");
      } else if (direction === "right") {
        conn.write("Move: right");
      } else {
        conn.write("Move: up");
      }
    }, 50);

    // move down every 50ms after a 250ms delay
    setTimeout(() => {
      direction = "down";
      setInterval(() => {
        if (direction === "down") {
          conn.write("Move: down");
        } else if (direction === "left") {
          conn.write("Move: left");
        } else if (direction === "right") {
          conn.write("Move: right");
        } else {
          conn.write("Move: down");
        }
      }, 50);
    }, 250);

    // move right every 50ms after a 500ms delay
    setTimeout(() => {
      direction = "right";
      setInterval(() => {
        if (direction === "right") {
          conn.write("Move: right");
        } else if (direction === "up") {
          conn.write("Move: up");
        } else if (direction === "down") {
          conn.write("Move: down");
        } else {
          conn.write("Move: right");
        }
      }, 50);
    },500);

    // move left every 50ms after a 750ms delay
    setTimeout(() => {
      direction = "left";
      setInterval(() => {
        if (direction === "left") {
          conn.write("Move: left");
        } else if (direction === "up") {
          conn.write("Move: up");
        } else if (direction === "down") {
          conn.write("Move: down");
        } else {
          conn.write("Move: left");
        }
      }, 50);
    }, 750);
  });

  // event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

const handleUserInput = function (data) {
  if (data === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
};

module.exports = { connect, handleUserInput };