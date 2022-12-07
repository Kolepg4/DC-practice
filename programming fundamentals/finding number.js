let n = [10, 20, 30, 40, 50];


function numArr (x, array) {
    console.log (x," " + array);
    let numberfound=false;
    for (i=0;i <array.length;i++){
        console.log(i);
        if (x == array[i]){
            numberfound=true;
            }
            if(numberfound);
            break;
    }
    if(numberfound){
        console.log("Number Found!")
    }else{
        console.log("Number not Found!")
    }
    
}

console.log (numArr (10, n))