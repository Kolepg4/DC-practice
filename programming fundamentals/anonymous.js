let str = "eYe".toLowerCase().replace(' ','');

function isPalidrome(str){
    let s = '';
    for(let i=str.length-1;i>=0;i--){
        //-1 helps to start from the back of the array
        // Versus when using .length where you go from the front
            s = s + str[i];
    }
    if(str == s) return true;
    return false;
    
}
let palidromeFlag = isPalidrome(str);
console.log(palidromeFlag)