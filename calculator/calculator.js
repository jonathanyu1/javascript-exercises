function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (array1) {
	let sum=0;
	array1.forEach(element=>{
		sum+=element;
	});
	return sum;
}

function multiply (array1) {
	let result = 1;
	array1.forEach(element=>{
		result*=element;
	});
	return result;
}

function power(a,b) {
	return a**b;
}

function factorial(num) {
	let result=1;
	for (i=num;i>0;i--){
		result*=i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}