function fibonacci(a)
{
  var number = [0,1];
  for (var i = 2; i < a ; i++)
  {
    number.push(number[i - 2] + number[i - 1]);
  }
  console.log(number);
}
