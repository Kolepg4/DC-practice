//Given a string, check to see if the string is palindrome or not.
// A palindrome reads the same as from the front and from the back . Example: race car, eye
//Hint: A string is an array of characters. For example: eye = [e,y,e]
//Example let s = "eye" here s.length = 3 s[0]=e,s[1]=y,s[2]=e
let str = "RACEcara".toLowerCase();//RACE car => racecar
function isPalindrome(str){
    let s = '';
    //str = 'digitalcrafts'
    //s = 'stfarclatigid'
    for(let i=str.length-1;i>=0;i--){
        s = s + str[i];
        //Example racecar
        //i=6 , s = s+ str[6], s = 'r'
        //i=5 , s = s + str[5], s= 'ra'
        //i=4, s = s + str[4], s = 'rac'
        //...
    }
    //s = 'racecar'
    if(str == s) return true;
    return false;
}
function isPalindrome1(str){
    let s = '';
    //str = 'digitalcrafts'
    //s = 'stfarclatigid'
    let l = str.length;
    for(let i=0;i<l;i++){
        if(str[i]!=str[l-1]) return false;
        l=l-1;
    }
    return true;
}
let palindromeFlag = isPalindrome1(str);
console.log(palindromeFlag)