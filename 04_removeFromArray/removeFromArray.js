// const removeFromArray = function(args) {
//   let array = arguments[0]
//   let argLen = arguments.length
//   for(let i=1; i < argLen; i++) {
//     let val = arguments[i]
//     if(array.indexOf(val) !== -1)
//       array.splice(array.indexOf(val), 1)
//   }

//   return array
// };
const removeFromArray = function(array, ...args) {
  // array.forEach((item)=> {
  //   if(!args.includes(item))
  //     newArray.push(item) 
  // });

  return array.filter(val => !args.includes(val))
} 

// Do not edit below this line
module.exports = removeFromArray;
