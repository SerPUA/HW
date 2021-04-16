let a = prompt('number')
function fact (a) {
    return (a !== 0) ? a * fact (a - 1):1;
}
alert(fact (a));