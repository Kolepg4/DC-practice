//default parameters

function add(x,y=15){
    const c = x+y;
    console.log(c)
}

add(3);

//spread/rest

const a = [1,2,4,3,4]
const b = [ 10,20,30]
const c = [...a,...b]//spreads the arrays and prints individual values from the array
console.log(c)

//Destructuring parameters

const p = [10,2,3,0]
const [r, s, n] = p;
console.log(n)
