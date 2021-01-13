const sumAll = function(num1, num2) {
    let finalSum=0;
    if (num1>=0 && num2>=0 && typeof(num1)== `number` && typeof(num2)== `number`){
        for (i=Math.min(num1,num2);i<=Math.max(num1,num2);i++){
           finalSum+=i;
       }
    } else{
        return `ERROR`;
    }
    return finalSum;
}

module.exports = sumAll

// jasmine sumAll.spec.js