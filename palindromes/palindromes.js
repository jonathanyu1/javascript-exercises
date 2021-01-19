const palindromes = function(string) {
    let string2='';
    let string1=string.toLowerCase().replace(/[^A-Za-z]/g, "");
    for (i=string1.length-1;i>=0;i--){
        string2+=string1[i];
    }
    console.log(string2);
    console.log(string1);
    return string2===string1;
}

module.exports = palindromes
