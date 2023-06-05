const reverseString = function(word) {

    let length = word.length,
        x=0,
        z = 0,
        wordArray = [],
        reversedArray = [],
        outLength = length - 1,
        reversedWord;

    while(x<length){
        wordArray[x] = word.substr(x, 1);
         x++;
    }
    
    for (let y = outLength; y>=0; y--) {
        
        reversedArray[y]= wordArray[z];
        z++;
    }

    reversedWord = reversedArray.join('');
    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
