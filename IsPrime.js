function checkPrime(num){
    for(let i = 3;i<num;i++){
        if(num%i===0)
        return false;
    }
    return true;
}

console.log(checkPrime(22))
//check prime from 1 to N
