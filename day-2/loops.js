function vowelsAndConsonants(s) {
    var stringArray=s.toLowerCase().split('');
    var vowels='aeiou';

    for(let char of stringArray){
        if(vowels.includes(char)){
            console.log(char);
        }
    }
    for(let char of stringArray){
        if(!vowels.includes(char)){
            console.log(char);
        }
    }
}
