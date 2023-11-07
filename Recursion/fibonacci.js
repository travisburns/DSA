//Give a number 'n', find the first 'n' elemenets opf the fibonacci sequence
// the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// the first two numbers in the sequence are 0 and 1



function fibonacci(n) {
  const f = [0, 1]
  for(i = 2; i <= n; i++) {
    f[i] = f[f-1] + f[n-2]
  }
  return f
}


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


//big-o = 0(n) which means big-o = 0(1) = linear time complexity

function fibonacci(n) {
  const f = [0,1]
  for (let i=2; i <= n; i++) {
    f[i] = f[n-1] + f[n-2]
  }
  return f

}

console.log((3))

function fibonacci(n) {
  const f = [0 ,1]
  for (let i = 2; i<=n; i++) {
    f[n -i] + f[n-2]
  }
  return f
}

console.log(fibonacci(5))
