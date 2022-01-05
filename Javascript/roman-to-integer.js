
var romanToInt = function(s) {
    const dict = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M":1000}
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const numerals = s.split("")
    let array = []
    
    for(i=0; i<numerals.length; i++) {
     const next = numerals[i+1]
     
     if(dict[numerals[i]] < dict[next]){
        array.push(dict[next] - dict[numerals[i]])
         i+=1
        }else {
            array.push(dict[numerals[i]])
        }
    }
    return array.reduce(reducer)
};
