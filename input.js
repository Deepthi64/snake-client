

let connection;
let movesnake;

// Function to set up input from stdin
const setupInput = function (conn) {
  connection = conn;

  setTimeout(() => {
    connection.write("Move: up");
  }, 2000); 

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // Event listener for keyboard input
  stdin.on('data', (givenKey) => {
    handleUserInput(givenKey);
  });

  return stdin;
};

const handleUserInput = function (givenKey) {
  if (givenKey === '\u0003') { 
    process.exit();
  }

  if (!connection || connection.destroyed) {
    return;
  }
  
  if (givenKey === 'w') { 
    movesnake = 'up';
  } else if (givenKey === 'a') { 
    movesnake = 'left';
  } else if (givenKey === 's') { 
    movesnake = 'down';
  } else if (givenKey === 'd') { 
    movesnake = 'right';
  } else if (givenKey === '1') {
    connection.write("Say: Hello!");
  } else if (givenKey === '2') {
    connection.write("Say: Good game!");
  } else if (givenKey === '3') {
    connection.write("Say: LOL!");
  } else {
    return; 
  }
  
  
  connection.write(`Move: ${movesnake}`);
};

module.exports = { setupInput };
