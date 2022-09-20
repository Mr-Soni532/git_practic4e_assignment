function isPrime(N) {
    for (let i = 2; i <= N ** 0.5; i++) 
        if (N % i == 0)
            return false;
    return true;
}
let input = 13;
console.log(isPrime(input))