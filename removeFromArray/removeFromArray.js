const removeFromArray = function(array1, ...theArgs) {
    for (i=0;i<=theArgs.length;i++){
        if (array1.indexOf(theArgs[i])==-1){
            continue;
        }
        else{
            array1.splice(array1.indexOf(theArgs[i]),1);
        }
    }
    return array1;
}

module.exports = removeFromArray

// jasmine removeFromArray.spec.js