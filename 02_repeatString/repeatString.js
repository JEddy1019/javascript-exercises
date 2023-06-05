let string,
    num;
const repeatString = function(string, num) {
    let temp = '';
    let x=0
    // if(x<=-1){
    //     temp = 'ERROR';
    //     return temp;
    // }else{
    //     temp = '';
    // for (x;x<num;x++){
    //     temp += string;
    // }
    // return temp;
    // }
    for (x;x<num;x++){
        if (num<0) break;
        temp += string;
    }
    if (num<0){
         temp = 'ERROR'
    }
    return temp;
    
};

// Do not edit below this line
module.exports = repeatString;
