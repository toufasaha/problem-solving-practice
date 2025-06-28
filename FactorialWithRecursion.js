function factorial(n) {

    if(n == 1) {
        return 1;
    }

    let val = factorial(n-1);
    return n * val;
}

function getFactorial(n){
    console.log(n * factorial(n-1));
}

getFactorial(5);
