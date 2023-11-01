public static int Factorial(int n)
{
  int result = 1;
  for (int i = 2; i <= n; i++)
  {
    result *= i;
  }
  return result;
}

Console.WriteLine(Factorial(0));
Console.WriteLine(Factorial(1));
Console.WriteLine(Factorial(5));