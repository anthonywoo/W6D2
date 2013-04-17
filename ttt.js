u = require("underscore")
Array.prototype.myTranspose = function() {
  var length = this.length;
  var width  = this[0].length;
  var newArray = new Array();
  for (var i = 0; i < width; i++) {
    newArray.push([]);
  }

  for (var i = 0; i < length; i++) {
    for (var j = 0; j < width; j++) {
      newArray[j][i] = this[i][j];
    }
  }
  return newArray;
};

var Game = function(){
  this.board = [["_","_","_"],
                ["_","_","_"],
                ["_","_","_"]];
};

Game.prototype.place = function(row, col, sym){
  if (this.validPlacement(row, col)) {
    this.board[row][col] = sym;
  }
};

Game.prototype.validPlacement = function(row, col) {
  return (this.board[row][col] === "_") ? true : false;
};

Game.prototype.hasWinner = function(sym) {
  //checking rows
  u.each(this.board, function(row) {
    u.every(row, function(val) {
      return (val === sym);
    })
  })

  //checking columns
  var columns = this.board.myTranspose;
  u.each(columns, function(col) {
    u.every(col, function(val) {
      return (val === sym);
    })
  })

  //checking diagonals
  var leftDiagonals  = [this.board[0][0], this.board[1][1], this.board[2][2]];
  var rightDiagonals = [this.board[0][2], this.board[1][1], this.board[2][0]];
  u.every(leftDiagonals, function(val) {
    return (val === sym);
  })
  u.every(rightDiagonals, function(val) {
    return (val === sym);
  })
};

Game.prototype.draw = function() {
  var board = u.flatten(this.board);
  return !u.contains(board, "_")
}

Game.prototype.playGame = function() {
  var sym = 'x'
  while(!this.hasWinner() && !this.draw()) {
    log(this.board)
    log("Player " + sym + " enter move!");
    // get user input
    this.place(row,col,sym);
    sym = sym === "x" ? "y" : "x"
  }
  winner = sym === "x" ? "y" : "x"
  log("Player " + winner + " wins!")
}