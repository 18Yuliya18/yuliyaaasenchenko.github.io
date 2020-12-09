
function howManyIf(Name, Surname, i)
{
  if ( i % 3 == 0 && i % 5 ==0 && i<=100 )
  {
      console.log(Name + " " + Surname);
  }

  else if ( i % 3 == 0 && i<=100)
  {
    console.log(Name);
  }

  else if ( i % 5 == 0 && i<=100)
  {
    console.log(Surname);
  }
  else if(i<=100)
  {
    console.log(i);
  }
  i--;
}
  howManyIf("Yuliya", "Senchenko", 100);
