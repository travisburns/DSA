function fibonacci(n) {
  const f = [0,1]
  for (let i = 2; i <= n; i++) {
    f[i] = f[n-1] + f[n-2]
  } 

  return f
}

console.log(fibonacci(3))

function fibonacci(n) {
  const fib = [0, 1]
  for(let i = 2; i< n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

console.log(fibonacci(2))
console.log(fibonacci(5))