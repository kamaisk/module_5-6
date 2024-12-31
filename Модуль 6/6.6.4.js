const boardSize = 3;
const board = [];

for (let i = 0; i < boardSize; i += 1) {
  let row = [];
  for (let j = 0; j < boardSize; j += 1) {
    row.push(Math.random() < 0.5 ? 'X' : '0');
  }
  board.push(row);
  console.log(board[i].join('  '));
}