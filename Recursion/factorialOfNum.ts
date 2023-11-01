// factorial of number

let n = 0;

function factorial(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(n));