const repeatString = function(string1, repeatTimes) {
    let i=0;
    let newString=``;
    if (repeatTimes<i){
        return `ERROR`;
    } else {
        while (i<repeatTimes){
            newString+=string1;
            i++;
        }
    return newString;
    }
}

module.exports = repeatString
