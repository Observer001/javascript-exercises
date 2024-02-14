const palindromes = function (str) {
    let processedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (processedString.split("").reverse().join("") === processedString);
    
    // reversedString === str ? true :false;
    // console.log(reversedString);
    // return reversedString;
};

// Do not edit below this line
module.exports = palindromes;
