const sumAll = function(first, last) {

        let temp;
        let sum = 0;
        let firstType = typeof first;
        let lastType = typeof last;

        if (first>last){         
            temp=first;
            first=last;
            last=temp;
            }
    
        if (first < 0 || last < 0 || firstType != 'number' || lastType != 'number' ) {
             return 'ERROR';
            }

        for (let x = first; x<=last; x++){
            sum+=x;
            }

        return sum;

};

// Do not edit below this line
module.exports = sumAll;
