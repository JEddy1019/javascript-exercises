const leapYears = function(year) {
    let multipleOf4 = year % 4,
    multipleOf400 = year % 400,
    multipleOf100 = year % 100,
    answer;

if (!multipleOf4 && multipleOf100){
    answer = true;
}

if (!multipleOf4 && !multipleOf100){
    if (!multipleOf100 && !multipleOf400){
        answer = true;
    }else{
        answer = false;
    }
    
}

if (multipleOf4){
    answer = false;
}

return answer;

};

// Do not edit below this line
module.exports = leapYears;
