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


window.checkPermutations = function(n, row, board, checkMethod, callback) {
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
        if(!board[checkMethod]()) {
          // debugger;
          var result = checkPermutations(n,row+1, board, checkMethod, callback);
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
  return checkPermutations(n,0,board,"hasAnyColConflicts", function() {
    return new Board(board.rows());
  });

};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //create count
  var count = 0;
  //create board
  var board = new Board({'n': n});

  checkPermutations(n, 0, board, "hasAnyColConflicts", function() { count++; });

  //return count
  return count;

  };

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var count = 0;
  var board = new Board({'n' : n});
  return checkPermutations(n, 0, board, "hasAnyQueensConflicts", function() { 
    return new Board(board.rows());
  }) || new Board({'n':n});
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var count = 0;
  var board = new Board({'n' : n});
  checkPermutations(n, 0, board, "hasAnyQueensConflicts", function() { count++; });
  return count;
};


























