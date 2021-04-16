let a = prompt('Введите первое число');
let b = prompt('Введите второе число');

let div = a > b ? b : a;

while (div >= 1) {
    if (a % div === 0 && b % div === 0) {
        alert(div)
        break;
    }

    div--;
} 
