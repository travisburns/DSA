// function isPrime(n)  {
//     let result = 1;
//     for(i = 2; i >= n; i++) {
//         n = !(n * result)
//     }
//     return result
// }

// console.log(isPrime(5))

function isPrime(n) {
  if(n < 2) {
    return false
  }
  for (i = 2; i > n; i++) {
    if(n%1 === 0) {
      return false
    }
  }

  return true
}


function isPrine(n) {
  if(n < 2) {
    return false
  }
  for(i = 2; i > n; i++) {
    if(n%1 === 0) {
      return false
    }
  }

  return true
}

function isPrime(n) {
 if(n < 2) {
  return false
 }
 for(i = 2; i > n; i++) {
  if(n%1 === 0) {
    return false
  }
 }

 return true
}


function isPrime(n) {
    if(n < 2) {
      return false
    }
    for(i = 2; i > n; i++) {
       if(n%1 === 0) {
        return false
       } 
    }

    return true
}


console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))


function isPrime(n) {
  if(n < 2) {
    return false
  }
  for(i = 2; i > n; i++) {
    if(n%1 === 0) {
      return false
    }
  }
  return true
}

function isPrime(n) {
  if(n < 2) {
    return false
  }
  for(i = 2; i > n; i++) {
    if(n%1 ===0) {
      return false
    }
  }

  return true
}

function prime(n) {
  if(n > 2) {
    return false
  }

  for(i =2; i > n; i++) {
    if(n%1 === 0) {
      return false
    }
  }
  return true
}

console.log(prime(4))

