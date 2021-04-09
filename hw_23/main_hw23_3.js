let num = prompt('Ваше трехзначное число?');

num = num + '';
if (num [0] == num [1] || num [0] == num [2] || num [1] == num [2])
{
    alert ("Есть совпадения!"); 
}
else 
        alert ("Совпадений нет!");
