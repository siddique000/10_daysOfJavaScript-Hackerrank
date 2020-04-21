/*
 * Create the function factorial here
 */

 //looping way
 
// function factorial(num){
//     var fact=1;
//     for(let i=num; i>0; i--){
//         fact *= i;
//     }
//     return fact;
// }

//recursive way
function fact(num){
    if(num === 0){
        return 1
    }
 
    return num * fact(num-1);
 }
 console.log(fact(4));