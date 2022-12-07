const findMissing = (a)=>{
    let x = new Map();
    let big = 0;
    let output = [];
    for(let n in a){
        //x.set(1,1) , big = 1
        //x.set(4,4) , big = 4
        //x.set(2,2) , big = 4
        //x.set(6,7) , big = 6
        //x.set(7,7) , big = 7
        //x.set(8,8) , big = 8
        x.set(a[n],a[n]);
        if(a[n]>big) {          //checks the array [a] for the biggest number then sets it as the biggest number
            big = a[n];
        }
    }
    for(let i=1;i<=big;i++){        //itrates through each number in the array and compares it to the biggest number
        if(!x.has(i)){
            output.push(i)
        }
    }
    return output;
}

let a = [1,4,2,6,7,8]

let output = findMissing(a);
console.log(output);