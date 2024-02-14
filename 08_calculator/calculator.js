const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current)
  // console.log(arr);
  // if(arr.length === 0)
  //   return 0;

  // let sol=1;
  // arr.forEach(val => sol *= val);
  // return sol;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if(num <= 1)
    return 1;

  let sol = 1;
  for(let i=1; i<=num; i++)
    sol = sol*i;

  return sol;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
