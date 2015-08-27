var nQueens = function(n) {
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