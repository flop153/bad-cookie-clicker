
    var score = 0;
var cursors = 0;
var cursorCost = 15;
var grandmas = 0;
var grandmaCost = 100;
function addToScore(amount) {
  score = score + 1;
document.getElementById("score").innerHTML = score;
}
  function purchaseCursor(amount) {
    if (score >= cursorCost) {
      cursors = cursors + 1;
      score = score - cursorCost;
      cursorCost = Math.round(cursorCost*1.2);
      document.getElementById("cursorprice").innerHTML = cursorCost;
      document.getElementById("cursoramount").innerHTML = cursors;
    }
  }
function buyGrandma(amount) {
  if (score >= grandmaCost) {
    grandmas = grandmas + 1;
    score = score - grandmaCost;  Math.round(grandmaCost*1.2);
    document.getElementById("gcost").innerHTML = grandmaCost;
  }
}
setInterval(getMoney, 1000);
function getMoney() {
  score = score + cursors;
  score = score + grandmas * 5;
}
  
  
