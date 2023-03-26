//Основы JavaScript. Циклы while и for.

//Задача. Выведите чётные числа
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
} 

//Задача. Замените for на while 
let i = 0; 
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

//Задача. Повторять цикл, пока ввод неверен 
let number;
do {
    number = prompt('Введите число > 100', 0);
} while (number <= 100 && number);

//Основы JavaScript. Конструкция "switch"
//Задача. Напишите "if", аналогичный "switch" 

let browser = prompt('What browser do you have?'); 
    if (browser === 'Edge') {
      alert('You have got the Edge!');

    } if (browser === 'Chrome' 
    || browser === 'Firefox' 
    || browser === 'Safari' 
    || browser === 'Opera') {
      alert('Okay we support these browsers to');

    } else {
      alert('We hope that this page looks ok!');
    }
     

switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  } 

  //Задача. Переписать условия "if" на "switch" 
  const number = +prompt('Введите число между 0 и 3', ''); 

  switch (number) {
    case 0:
      alert('Вы ввели число 0');
      break;

    case 1:
      alert('Вы ввели число 1');
      break;

    case 2:
    case 3:
      alert('Вы ввели число 2, а может и 3');
      break;
  } 
  

  const number = +prompt('Введите число между 0 и 3', '');

  if (number === 0) {
    alert('Вы ввели число 0');
  }
  
  if (number === 1) {
    alert('Вы ввели число 1');
  }
  
  if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
  } 

  //Основы JavaScript. Функции
  //Задача. Перепишите функцию, используя оператор '?' или '||' 
  //Условие
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

//Решение  '?'
function checkAge {
  return (age > 18) ? true : confirm('Родители разрешили?');
} 

//Решение  '||'
function checkAge {
  return (age > 18) || confirm('Родители разрешили?');
} 

//Задача. Функция min(a, b)
function min(a, b) {
  if a < b {
    return a;
  }
  
  if b < a {
    return b;
  }
}

//Задача. Функция pow(x,n) 
function pow(x, n) {
  let result = x; 
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
} 

let x = prompt('Введите число, которое нужно возвести в степень', '');
let n = prompt('Введите степень', ''); 

if (n < 1) {
alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}

