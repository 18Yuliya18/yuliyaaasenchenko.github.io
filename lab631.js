var beerNum = 99;
var word = "bottles";
function howManyIf()
{
  while (beerNum > 0)
  {
    if (beerNum == 1)
    {
      word = "bottle";
    }
    console.log(beerNum + " " + word + " of beer on the wall,"+'\n' + beerNum + " " + word + " of beer");
    beerNum = beerNum - 1;
    if (beerNum > 0)
    {
      console.log("Take one down, pass it around ");
    }
    if (beerNum == 0)
    {
      console.log("No more bottles of beer")
    }
  }
}
  howManyIf();
