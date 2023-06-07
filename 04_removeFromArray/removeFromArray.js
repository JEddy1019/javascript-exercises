const removeFromArray = function(array, ...elements) {
    let lengthA = array.length,
        newArray,
        lengthE = arguments.length;

    for (let x= 0; x<lengthE; x++){
         for (let y = 0; y<lengthA; y++){
            // if (typeof array[y] !== typeof elements[x]) continue;
            if (array[y]===elements[x]){
                array.splice(y,1);
            }
        
            
        }
    }
    newArray = array;
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
