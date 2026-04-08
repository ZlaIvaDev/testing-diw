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

let alphabet = 'abcdefghijklmnopqrstuvwxyx';
let cipher = 'zxcvbnmqwertyuiopasdfghjkl';

function caesarCipher(word) {
  
    let originalIndex = [];
    let cipheredWord = []

    for (e of word) {
        originalIndex.push(alphabet.indexOf(e))
        }

    for (e of originalIndex) {
        cipheredWord.push(cipher.charAt(e))
    }

        return(cipheredWord.join(''))

}




module.exports = { capitalize, reversed, calculator, caesarCipher };





/*
A reverseString function that takes a string and returns it reversed.
A calculator object that contains functions for the basic operations:
add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.




*/