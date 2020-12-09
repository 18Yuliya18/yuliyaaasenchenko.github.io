function masa(index)
{
  if(index<19 && index>0)
  {
    console.log ("Недостатня маса");
  }
  else if (index>=19 && index <25)
  {
    console.log ("Норма");
  }
  else if (index>=25 && index <30)
  {
    console.log ("Гладкість");
  }
  else if (index>=30)
  {
  console.log ("Ожиріння");
  }
  else
  {
  console.log ("Не відповідає умові задачі ");
  }
}
