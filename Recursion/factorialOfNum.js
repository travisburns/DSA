// give an integer 'n', find teh factorial of that integer



// the factorial of a non-netagtive integeer 'n' denoted n!, is the product of all positive inegers less than or equal to 'n'

// const factorial = (n) =>{
//     !n = a * b * c 
//     if (a <= n
//         b <= n
//         c <= n
//         ) {
//             return true } else {
//                 return false;
//         }
    

// } 

// factorial of number
function factorial(n) {
    let result = 1
    for(let i = 2; i <=n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))

