let a = +prompt('first');
let b = +prompt('second');
function compare (a , b) {
       if (a > b) {
        return 1;
    } else if (a < b) {
        return -1; 
    } else if (a === b) {
        return 0;
    }
    
}

function fact (a) {
    return (a !== 0) ? a * fact (a - 1):1;
}
alert(fact (a));

alert(compare (a, b))
//так можно делать?
// или как такое делать правильно?