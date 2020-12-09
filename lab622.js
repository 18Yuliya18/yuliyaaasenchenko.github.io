var i;
function howManyIf(){
for (i = 100; i >= 1; i--){
  if ((i % 3) == 0 && (i % 5) == 0){
    console.log("Yuliya" + " " + "Senchenko");
  } else if (i % 5 == 0){
    console.log("Senchenko");
  } else if (i % 3 == 0){
    console.log("Yuliya");
  } else {
    console.log(i);
  }
  }
}
howManyIf();
