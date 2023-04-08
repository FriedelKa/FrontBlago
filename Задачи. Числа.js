// Задача. Сумма пользовательских чисел
let a = +prompt('Введите первое слагаемое', ''); 
let b = +prompt('Введите второе слагаемое',''); 
alert (a + b);

// Задача. Ввод числового значения
function readNumber() {
    let number;
    do {
        number = prompt('Введите число', 0);
       }  while (!isFinite(number));
        if (number === 0 || number === '') return null;
        return +number 
} 
alert (`Число: ${readNumber()}`);
