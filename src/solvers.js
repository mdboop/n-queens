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

window.findNRooksSolution = function(n){
  var solution = 1; //fixme
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var count = 0;
  var board = new Board({'n': n});

  var inner = function(n, board, row) {
    row = row || 0;
    //loop over current row n times
    for(var col = 0; col < n; col++) {
      board.set(row, board.get(row).map(function(){return 0}));

      board.togglePiece(row, col);
      
      if(board.hasColConflictAt(col)) {
        continue;
      }

      if(row === n - 1) {
        count++;
        continue;
      }
      if(row < n - 1) {
        //increasing row wierdly
        row++;
        inner(n, board, row);
        board.set(row, board.get(row).map(function(){return 0}));
        row--; 
      }
    }

    };

    inner(n, board);

    return count;

  };
  
  //call recursion on board

  //basecase
  //if(cant fill any row){backtrack}
  //if(fill last row){add to solution count}

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
