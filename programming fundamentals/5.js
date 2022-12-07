//  1
// 2 2
//3 3 3
function printPyramid(n,d){
    let spaces='';
    let row = '';
    for(i =1;i<=n;i++){
        row='';
        spaces='';
        for(j=1;j<=n-i;j++){
            spaces+=' '
        }
        for(k=1;k<=i;k++){
            row=row+i+' ';
        }
        console.log(spaces+row);
    }
}
console.log(printPyramid(9,0));