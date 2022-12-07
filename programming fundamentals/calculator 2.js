function addnumbers(a,b){
    let c = a + b;
    console.log(c);        
}

function simpleCalculator(a,b,o){
    let c =0;
    if(o == '+' || o == 'plus' || o =='add'){
        c = a+b;
    }
    else if(o == '-' ){
        c = a-b;
    }else if(o == '*'){
        c = a*b;
    }else if(o == '/'){
        c = a/b;
    }else{
        console.log("Dont know what you are doing");
    }
    return c;
}

//x = 25 + simpleCalculator(4,5,"+")

let answer = 25 + simpleCalculator(4,5,"+");
console.log(answer)