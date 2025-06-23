//0 1 1 2 3 5 8 13

function fibonacciSeries(n) {

    let i = 1, a = 0, b = 1, res;

    while (i <= n) {

        if (i == 1) {
            console.log(a);
        }
        else if (i == 2) {
            console.log(b);
        }
        else {
            res = a + b
            a = b;
            b = res;
            console.log(res);
        }

        i++;
    }
}


fibonacciSeries(15);
