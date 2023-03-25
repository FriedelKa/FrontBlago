//Основы JavaScript. Переменные. 
//Задача 1
<script> 
    let admin, name;
    name = 'Джон';
    admin = name;
    alert( admin );

//Задача 2.1
    let ourPlaneta;

//Задача 2.2 
    let userName;

//Основы JavaScript. Типы данных. 
//Задача 1 
let name = "Ilya"; // присвоили переменную

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya 

//Основы JavaScript. Взаимодействие: alert, prompt, confirm. 
//Задача 1 
    let userName = prompt('Введите ваше имя', 'Вася Пупкин');
    alert(`Приятно познакомиться, ${userName}!`);

//Основы JavaScript. Базовые операторы, математика. 
//Задача 1 
    let a = 1, b = 1;

    let c = ++a; // a=2, c=2
    let d = b++; // b=1, d=2

//Задача 2 
    let a = 2;
    let x = 1 + (a *= 2); // x=5

//Задача 3 
alert("" + 1 + 0)='10'; 
alert("" - 1 + 0)=-1; 
alert(true + false)=1; 
alert(6 / "3")=2; 
alert("2" * "3")=6;
alert(4 + 5 + "px")='9px'; 
alert("$" + 4 + 5)='$45';
alert("4" - 2)=2;
alert("4px" - 2)=Nan; 
alert("  -9  " + 5)='-95'; 
alert("  -9  " - 5)=-14; 
alert(null + 1)=1; 
alert(undefined + 1)=Nan; 
alert(" \t \n" - 2)=-2; 

//Задача 4 
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); 

//Основы JavaScript. Операторы сравнения. 
//Задача 1 
let(5 > 4); // true
let("ананас" > "яблоко"); // false
let("2" > "12"); // true
let(undefined == null); // true
let(undefined === null); // false
let(null == "\n0\n"); // false
let(null === +"\n0\n"); // false

//Условное ветвление: if, '?'
//Задача. Название JavaScript
    let nameJavaScript = prompt('Какое "официальное" название JavaScript?', '');

    if (nameJavaScript == 'ECMAScript') {
    alert( 'Верно!' );
    } else {
    alert( 'Не знаете? «ECMAScript»!' );
    } 

//Задача. Покажите знак числа

    let number = prompt('Введите число', 0);
    if (number > 0) {
        alert(1);
    } if (number < 0) {
        alert(-1);
    } if (number == 0) {
        alert(0);
    } 

//Задача. Перепишите 'if' в '?' 
    let a = 2;
    let b = 3;

    let result = (a + b < 4) ? 'Мало' : 'Много';
    alert (result);

//Задача. Перепишите 'if..else' в '?'

    let login = prompt('Введите логин', '');
    let message = (login == 'Сотрудник') ? 'Привет' : 
    (login == 'Директор') ? 'Здравствуйте' : 
    ''; 

    alert  =  (message); 

//Задача. Проверка логина 
   
    let login = prompt("Введите логин", '');

    if (login === 'Админ') {
    let password = prompt('Введите пароль', '');
    if (password === 'Я главный') {
            alert( 'Здравствуйте!' );
    }   else if (password === '' || password === null) {
            alert( 'Отменено' );
    }   else {
            alert( 'Неверный пароль' );
    }
    }   else if (login === '' || login === null) {
            alert( 'Отменено' );
    }   else {
            alert( "Я вас не знаю" );
    }   

</script> 