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