let a;
do {
  
  a = confirm("Посчитаем? Да - 1; Нет - 0");
  if (!a) {
    break;
  }
  let b = +prompt("Введите первое число");
  let c = +prompt("Введите второе число");
  let sign = prompt("введите знак + - * /");

  if (sign === "*") {
    alert(b * c);
  } else if (sign === "+") {
    alert(b + c);
  } else if (sign === "-") {
    alert(b - c);
  } else if (sign === "/") {
    alert(b / c);
  }
} while (a);
