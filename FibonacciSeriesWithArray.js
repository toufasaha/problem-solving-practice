//0 1 1 2 3 5 8 13

function fibonacciSeries(n) {

    let i = 2;
    let a = [0, 1];
    if (n < 1) {
        console.log("invalid input");
        return;

    }
    if (n == 1) {
        console.log(a[0]);
        return;
    }

    while (i < n) {

        a[i] = a[i - 1] + a[i - 2]

        i++;
    }

    console.log(a);
    console.log("Length: " + a.length);
}


fibonacciSeries(3);
