/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findRooks = function(n, row, board, callback) {
    //base case: complete board
    if(row === n && n !== 0) {
      return callback();
      // return;
    }
    //recursive case
    if(row < n) {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row,col);
        //check here
        //use checkMethod for check
        if(!board.hasColConflictAt(col)) {
          var result = findRooks(n,row+1, board, callback);
          if(result) {
            return result;
          }
        }
        board.togglePiece(row,col);   
      }
    }
};


window.findQueens = function(n, row, board, callback) {
    //base case: complete board
    if(row < 0 && n !== 0) {
      return callback();
      // return;
    }
    //recursive case
    if(row >= 0) {
      for(var col = 0; col < n; col++) {
        board.togglePiece(row,col);
        //check here
        //used for check
        if(!board.speedyMajorDiagonalAt(row, col) && !board.speedyMinorDiagonalAt(row,col) && !board.hasColConflictAt(col)) {
          // debugger;
          var result = findQueens(n,row - 1, board, callback);
          if(result) {
            return result;
          }
        }
        board.togglePiece(row,col);   
      }
    }
};

window.findNRooksSolution = function(n){
  var count = 0;
  var board = new Board({'n': n});
  return findRooks(n,0,board, function() {
    return new Board(board.rows());
  });
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
    var count = 0;
  //start all as empty string
  var all = '';
  //populate string with n number of 1s
  for(var i = 0; i < n; i++) {
    all += '1';
  }
  //make it base 10;
  all = parseInt(all, 2);

  var tryBoard = function(cols) {

    if(cols === all) {
      count++;
      return;
    }

    var poss = ~(cols) & all;

    while(poss) {
      var bit = poss & -poss;
      poss = poss - bit;
      tryBoard( cols|bit );
    }
  };

  tryBoard(0,0,0);

  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var count = 0;
  var board = new Board({'n' : n});
  return findQueens(n, n - 1, board, function() { 
    return new Board(board.rows());
  }) || new Board({'n':n});
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var count = 0;
  //start all as empty string
  var all = '';
  //populate string with n number of 1s
  for(var i = 0; i < n; i++) {
    all += '1';
  }
  //make it base 10;
  all = parseInt(all, 2);

  var tryBoard = function(ld, cols, rd) {

    if(cols === all) {
      count++;
      return;
    }

    var poss = ~( ld | cols | rd ) & all;

    while(poss) {
      var bit = poss & -poss;
      poss = poss - bit;
      tryBoard( (ld|bit)<<1, cols|bit, (rd|bit)>>1 );
    }
  };

  tryBoard(0,0,0);

  return count;

};


























