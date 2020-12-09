alert("Love calculator!");
var yourName1=prompt("Enter name1");
var yourName2=prompt("Enter name2");

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
}
alert ("Love score:" + getRandomInt(1, 100)  +"%");
