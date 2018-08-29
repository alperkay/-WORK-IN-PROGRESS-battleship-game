export type Row = string[]
export type Board = Row[]

//creating empty board for the user
export function emptyBoard() {
  let board = new Array(12);
  let i
  let j
  for (i = 0; i < 12; i++) {
    board[i] = new Array(12);
    for (j = 0; j < 12; j++) {
      board[i][j] = '-';
    }
  }
  return board
}

//creating computer's board with randomly placed ships
export function computerBoard() {
  //creating empty board
  let board = new Array(12);
  let i
  let j
  for (i = 0; i < 12; i++) {
    board[i] = new Array(12);
    for (j = 0; j < 12; j++) {
      board[i][j] = '-';
    }
  }
  //function for generating random integer
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  //function for randomly deciding direction to be vertical (false) or horizontal (true)
  function randomDirection() {
    return Math.random() >= 0.5
  }
  //function to check if there's available room for the ship in the given coordinates
  function isThereRoom(dir,xAxis,yAxis,len) {
    if (dir===true && xAxis<(12-len+1)) {
      const part = board[yAxis].slice(xAxis,xAxis+len).filter(dash => dash!=='-')
      return (part.length>0 ? false : true)
    }
    if (dir===true && xAxis>=(12-len+1)) {
      return false
    } 
    if (dir===false && yAxis<(12-len+1)) {
      const part=[]
      let i
      for (i=0;i<len;i++) {
        part.push(board[yAxis+i][xAxis])
      }
      const fil = part.filter(dash => dash!=='-')
      return (fil.length>0 ? false : true)
    }
    if (dir===false && yAxis>=(12-len+1)) {
      return false
    }
  }
  
  //function to place ship to a random location
  function ship(len,char) {
    const dir = randomDirection()
    const xAxis= getRandomInt(11)
    const yAxis= getRandomInt(11)
    console.log(isThereRoom(dir,xAxis,yAxis,len), char)
    if (isThereRoom(dir,xAxis,yAxis,len)) {
      if (dir===true) { //horizontal
        let i
        for (i=0;i<len;i++) {
          board[yAxis].splice(xAxis+i,1,char)
        }
      } else { //vertical
        let k
        for (k=yAxis; k<yAxis+len; k++) {
          board[k][xAxis]=char
        } 
      }
    } else {ship(len,char)} //if there's no available room in the given coordinate, try again
  }
  ship(5,'A') // Aircraft carrier (5 spots)
  ship(4,'B') // Battleship (4 spots)
  ship(3,'C') // Cruiser (3 spots)
  ship(3,'S') // Submarine (3 spots)
  ship(2,'M') // Minesweeper (2)
  
  return board
}