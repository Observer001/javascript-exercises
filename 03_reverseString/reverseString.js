const reverseString = function(string) {
  let index = string.length-1
  let result = ''
  while(index > -1) {
    result += string.charAt(index)
    index--
  }

  return result
};

// Do not edit below this line
module.exports = reverseString;
