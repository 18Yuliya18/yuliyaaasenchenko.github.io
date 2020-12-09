function year (yearr)
{
  if( yearr % 4 == 0 )
  if(yearr % 100 != 0 || ( yearr % 100 == 0 && yearr % 400 == 0))
  console.log ("366");
  else if (yearr<0)
  console.log ("Не відповідає умoві задачі");
  else
  console.log ("365");
}
