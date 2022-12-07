let n = [10,4,54,33,5]

let big = n[0]
for(i=0;i<n.length;i++){
let a = 0    
while(a<n.length) {
    if(n[a]<big){
        big=n[a];
    }
    a =  a+1;
}
console.log(big);

// let a = [0,10,40,32,55];
// let b = [2,6,3,80];
// let c = [];

// function mergeArray() {
//     let x = a.length > b.length? a.length: b.length; 
//     // ternary operator 
//     // This is to replace if and else statement
//     // if (a.lenght > b.length){
//     // }else {
//     //     x = b.length;
   
//    for(i=0; i < x; i++){
//         c.push(a[i]);
//         c.push(b[i]);
//    }
//    console.log(c);
// }
// mergeArray();

// let a = [1, 4, 5, 2];
// let b = [2, 3];
// let c = [];

//     let x = array1.lenth >= array2.lenth? array1.length: array2.length;
//     for(i = 0; i<x; i++){
//         if(array2<array1){
//         c.push(array1[i] * array2[i])
//         }
//         if(i>= array2.length){
//             c.push(array1[i] * 1)
//             }
//     console.log(c);
// }
// multiplyElement(b, a);

// let b = [1,4,5,2]
// let a = [2,3,2,3]
// let c = [];
// let x = a.length>b.length?a.length:b.length;
// for(i = 0;i<x;i++){
//     let aValue  = i>=a.length?1:a[i];
//     let bValue  = i>=b.length?1:b[i];
//     let product = aValue * bValue;
//     c.push(product);
// }
// console.log(c)
