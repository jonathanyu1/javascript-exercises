const reverseString = function(string1) {
    let string2=``;
    for (i=1;i<=string1.length;i++){
        string2+=string1[string1.length-i];
    }
    return string2;
}

module.exports = reverseString
