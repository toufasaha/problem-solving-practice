function factorial(n) {
    let i = 1, res = 1;
    while (i <= n) {
        if (i < 0) {
            console.log("Undefined");
            return;
        }

        res *= i;
        i++;

    }
    console.log(res);
}
factorial(4);

