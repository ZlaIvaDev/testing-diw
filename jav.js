function capitalize(arr) {
    return arr.at(0).toUpperCase()+arr.slice(1)
}



function reversed(str) {
    let splitString = str.split("");
    let reverseStr = splitString.reverse();
    let combineReversed = reverseStr.join("")
    return combineReversed;
}

const calculator = {

    add(a,b)  {
        return a+b;
    },

    substract(a,b) {
        return a-b;
    },

    multiply(a,b) {
        return a*b;
    },
    divide(a,b) {
        return a/b;
    },

};





module.exports = { capitalize, reversed, calculator };





/*
A reverseString function that takes a string and returns it reversed.
A calculator object that contains functions for the basic operations:
add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.




*/