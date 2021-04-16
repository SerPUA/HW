
    pos = 0;
    neg = 0;
    odd = 0;
    even = 0;
    zerro = 0;

// for (let i = 0; i < 10; i++) {
//     let a = +prompt('Введите несколько чисел');
//    if (a === 0) {
//        zerro++;
//    } else if (a > 0) {
//        pos++;
//    } else if (a < 0) {
//        neg++;
//    } else if (a % 2 === 0) {
//        even++;
//    } else {
//     odd++};
// };
// alert(`Вы ввели положительных: ${pos}, отрицательных ${neg}, число 0: ${zerro}, четных ${even}, нечетных чисел ${odd}`);
// почему то не работает верхний вариант.


for (let i = 0; i < 10; i++) {
let a = +prompt('Введите несколько чисел');
if (a === 0) {
   zerro++;
} else if (a > 0) {
   pos++;
} else if (a < 0) {
   neg++;
}
if (a % 2 === 0) {
   even++;
} else {
odd++};
};
alert(`Вы ввели положительных: ${pos}, отрицательных ${neg}, число 0: ${zerro}, четных ${even}, нечетных чисел ${odd}`);


