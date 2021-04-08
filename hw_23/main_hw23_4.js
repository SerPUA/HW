let num = prompt('Введите год');


if (num % 400 == 0 || num % 4 == 0 && num % 100 != 0)
{
    alert ("Высокосный!"); 
}
else 
        alert ("Не высокосный!");
