let sum = prompt('Введите вашу сумму в USD');
let EUR = prompt('Введите курс евро');
let UAH = prompt('Введите курс гривны');
let AZN = prompt('Введите курс манат');
let currency = prompt('EUR = 1, UAH = 2, AZN = 3')

switch (currency) {
    case '1':
        alert (sum*EUR);
        break;
    case '2':
        alert (sum*UAH);
        break;
    case '3':
        alert (sum*AZN);
        break;
        
}
