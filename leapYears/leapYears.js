const leapYears = function(year) {
    if (year%100==0){
        console.log(year%400==0 ? true:false);
        return (year%400==0 ? true:false);
    }
    return (year%4==0);
}

module.exports = leapYears

// jasmine leapYears.spec.js