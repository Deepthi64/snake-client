let connection;

const { connect } = require("./client");

//let direction;
let movesnake;
const handleUserInput = function (givenKey) {
 console.log('givenKey',givenKey);
 
  if (givenKey === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
  //if (direction) {
   // conn.write(`Move: ${direction}`);
  //}
  if (givenKey === 'w') { // \u0003 maps to ctrl+c input
   // if (direction !== 'down'){
       movesnake = 'up';
   // }
  }
  if (givenKey === 'a') { // move left
   // if (direction !== 'right') {
      movesnake = 'left';
    //}
  }
  if (givenKey === 's') { // move down
   // if (direction !==  'up') {
      movesnake = 'down'
   // }
  }
  if (givenKey === 'd') { // move right
   // if (direction !== 'left') {
      movesnake = 'right';
  //  }
  }
  //if (direction) {
   // console.log('direction',direction);
   console.log(`Move: ${movesnake}`);
    connection.write(`Move: ${movesnake}`);
  //}
};


const setupInput = (conn) => {
 // console.log('conn',conn);
  connection = conn;
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};

  

module.exports = { setupInput ,handleUserInput };