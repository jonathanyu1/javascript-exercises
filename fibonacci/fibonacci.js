const fibonacci = function(num) {
    let a=0;
    let b=1;
    if (num<0){
        return 'OOPS';
    } else {
        for (i=1;i<num;i++){
            // sum previous 2 values
            let temp = a+b;
            // increment so that a becomes next value, b, and then b becomes next value, temp
            a=b;
            b=temp;
        }
    }
    return b;
}

module.exports = fibonacci
