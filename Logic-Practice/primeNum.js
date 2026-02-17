let str = "54";
let n = Number(str);

let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(n, "is prime");
} else {
    console.log(n, "is not prime");
}
