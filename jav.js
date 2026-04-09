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

function checkUpper(a) {
    if (a == a.toUpperCase()) {
        console.log(true)
    } else {
        console.log(false)
    }
}

const nekiArej = [1,8,3,4,2,6];
function analyzeArray(arr) {
    const length = arr.length
    const average = arr.reduce((a,b) => a+b,0) / length;
    const minVal = Math.min(...arr)
    const maxVal = Math.max(...arr)
    

    const object = {
        average : average,
        min: minVal,
        max: maxVal,
        length: length,
    }
    return object

    
};

module.exports = { capitalize, reversed, calculator, caesarCipher, analyzeArray };


/*
An analyzeArray function that takes an array of numbers
 and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};
*/