var log = function(x) {
  console.log(x);
};

var Game = function(){
  this.pillars = [[3,2,1], [], []]
}

Game.prototype.move = function(from, to) {
  if (this.validMove(from, to)) {
    this.pillars[to].push(this.pillars[from].pop());
  } else {
    log("invalid move");
  }
};

Game.prototype.validMove = function(from, to) {
  var fromPiece = this.pillars[from][this.pillars[from].length - 1];
  var toPiece   = this.pillars[to][this.pillars[to].length - 1];
  return (fromPiece && (fromPiece < toPiece || !toPiece)) ? true : false;
};

Game.prototype.winner = function() {
  return this.pillars[2].length === 3 ? true : false;
}

Game.prototype.playGame = function() {
  while (!this.winner()) {
    log(this.pillars)
    log("Make a move")
    var from = prompt1
    var to   = prompt2
    this.move(from, to)
  }
}

var game = new Game

game.move(0, 2)
log(game.pillars)

game.move(0, 2)
log(game.pillars)