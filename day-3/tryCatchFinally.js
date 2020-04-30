/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        var newString=s.split('').reverse().join('');
        console.log(newString);
    }catch(error){
        console.log(error.message);
        console.log(s);
    }      
}