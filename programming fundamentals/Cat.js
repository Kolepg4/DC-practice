// Write a function to see if a given sentence is a pangram.

// let str = "Look over at the quiet zebra next to the envelope".toLowerCase().replace();

function isPangram(str){
    let strArr = str.toLowerCase;
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i=0; i<alpha.length; i++){
       if(str.indexOf(alpha[i]) < 0){
        return false
       }
    }
    return true;
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))

// let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
// function isPangram(sentence){
//     sentence = sentence.toLowerCase().split('');
//     for(const c of alphabets){
//         let x = sentence.find(y=>y==c);
//         if(x==undefined) return false;
//     }
//     return true;
// }
// console.log(isPangram('quick brown fox jumps over the lzy dog'));