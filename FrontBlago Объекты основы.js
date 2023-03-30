//Объекты: основы
//Задача. Привет, object
let user = {};
user.name = 'Jhon';
user.surname: 'Smith';
user.name = 'Pete';
delete user.name;

//Задача. Проверка на пустоту
function isEmpty(obj) {
    for (let key in obj ) {
        return false;
    }
    return true;
} 

//Задача. Сумма свойств объекта
let salaries = {
    John: 100, 
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);

//Задача. Умножаем все числовые свойства на 2 
let obj = {
    width: 200, 
    height: 300, 
    title: 'My menu'
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            alert(obj[key] *2);
        }
    }
}
