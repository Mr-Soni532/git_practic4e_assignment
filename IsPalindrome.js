function isPalindrome (str){
    let reverse = '';
    let bag = ' '
    for( let i = str.length-1;i>0;i--){
        bag+=str[i]
    }
    if(str == reverse){
        return true;
    }
    return false;
}

console.log(isPalindrome('absd'))


// check if the string is palindrom or not.