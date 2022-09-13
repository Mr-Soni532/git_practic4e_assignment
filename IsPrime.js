function isPrime(x){
    for(let i = 3;i<x;i++){
        if(x%i===0)
        return false;
    }
    return true;
}

console.log(isPrime(22))
//check prime from 1 to N
