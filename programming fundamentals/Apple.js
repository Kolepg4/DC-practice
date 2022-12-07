let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let beta = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

 function alphanum (str){
    let x = ""
    for(i = 0; i<str.length; i++){
        // if([]<=beta.length);{
        // console.log(str[i])
        for(j = 0; j<alpha.length; j++){
            // console.log(alpha[j])
            if(str[i] == alpha[j]){
                if (x == ""){
                    x = x + beta[j]
                }
                else {
                x = x + '#' + beta[j]
                // console.log(beta[j])
            }
        }
        }

 }
 console.log(x)
}
//  console.log("#" + alphanum)
alphanum("apple");