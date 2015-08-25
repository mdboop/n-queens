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
window.countNRooksSolutions = function(n, board, depth, solutionsCount) {
  depth = depth || 0
  board = board || new Board ({"n": n});
  solutionsCount = solutionsCount || 0;

  for(var i = 0; i < n; i++) {
    //check for row(depth) conflicts, if no conflict, toggle piece
    if(!board.hasRowConflictAt(depth)) {
      board.togglePiece(i, depth);
    }

    if(depth <= n){ 
      countNRooksSolutions(n, board, depth++, solutionsCount);  
    }
    
    solutionsCount++
    

    //iterate over blank boards, starting each one a new row in column 0;
  }

  return solutionsCount;


};



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
