function who()
{
  var onegame = document.querySelector(".game1");
  var twogame = document.querySelector(".game2");
  var threegame = document.querySelector(".game3");
  var fourgame = document.querySelector(".game4");
  var fivegame = document.querySelector(".game5");

  var  buyers= Array("1", "2", "3", "4", "5", "6");
  var buyer =buyers [Math.floor(Math.random()*buyers.length)];
 fourgame.innerHTML = "1 PLAYER" ;

  var  buyerrs= Array("1", "2", "3", "4", "5", "6");
  var buyerr =buyerrs [Math.floor(Math.random()*buyerrs.length)];
fivegame.innerHTML = "2 PLAYER";

  if ( buyerr > buyer)
{
  threegame.innerHTML ="Player 2 won!";
}
else  if ( buyerr < buyer)
{
  threegame.innerHTML ="Player 1 won!";
}
else  if ( buyerr == buyer)
{
  threegame.innerHTML ="DRAW!";
}
if (buyer == 1) {
onegame.style.backgroundImage="url('Снимок1.png')";
} else if (buyer == 2) {
onegame.style.backgroundImage="url('Снимок2.png')";
} else if (buyer == 3) {
onegame.style.backgroundImage="url('Снимок3.png')";
} else if (buyer == 4) {
onegame.style.backgroundImage="url('Снимок4.png')";
} else if (buyer == 5) {
onegame.style.backgroundImage="url('Снимок5.png')";
} else {
onegame.style.backgroundImage="url('Снимок6.png')";
}

if (buyerr ==1) {
twogame.style.backgroundImage="url('Снимок1.png')";
} else if (buyerr ==2) {
twogame.style.backgroundImage="url('Снимок2.png')";
} else if (buyerr == 3) {
twogame.style.backgroundImage="url('Снимок3.png')";
} else if (buyerr == 4) {
twogame.style.backgroundImage="url('Снимок4.png')";
} else if (buyerr == 5) {
twogame.style.backgroundImage="url('Снимок5.png')";
} else {
twogame.style.backgroundImage="url('Снимок6.png')";
}
}
