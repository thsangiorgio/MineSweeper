const generatePlayerBoard = (numberOfRows, numberOfColumns)=>{
  let board = [];

  for(rowIndex=0; rowIndex<numberOfRows; rowIndex++) {
    const row =[];
    for(columnIndex=0;columnIndex<numberOfColumns;columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs)=>{
  let board = [];
  for(let rowIndex=0; rowIndex<numberOfRows; rowIndex++) {
    const row =[];
    for(let columnIndex=0;columnIndex<numberOfColumns;columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs){
    let randomRowIndex = Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
numberOfBombsPlaced++;
    }
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1,1]
  ];
  const numberOfRows =bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};
let playerBoard = generatePlayerBoard(3,3);
let bombBoard = generateBombBoard(3,3,3);
console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
// bombBoard will sometimes have less bombs than specified due to the previously-mentioned missing code.
// Additionally, printing bombBoard will not look clean due to use of null instead of ' ' - this should just be for debugging, not presentation.
printBoard(bombBoard);
