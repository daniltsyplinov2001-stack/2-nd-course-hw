// 1
let password = 123;
let youPassword = Number(prompt('Введите пароль'));
youPassword === password
    ? console.log('Вход совершен')
    : console.log('Неверный пароль');


// 2
let c = 2;
c > 0 && c < 10
    ? console.log('Верно')
    : console.log('Неверно');


// 3
let d = 50;
let e = 99;
d > 100 || e > 100
    ? console.log('Верно')
    : console.log('Неверно')


// 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));


// 5
let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;

    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;

    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;

    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;

    default:
        console.log('Номер месяца больше 13')
}


// Доп
// 1
let addNumber = Number(prompt('Введите любое число'))

Number(addNumber)
    ? console.log(addNumber)
    : alert('Не число');

addNumber % 2 === 0
    ? alert('Четное')
    : alert('Не четное');


// 2 && 3
let clientOS = 0;
let clientDeviceYear = 2016;

switch (clientOS) {
    case 0:
        if (clientDeviceYear < 2015)
            alert('Установите облегченную версию приложения для iOS по ссылке');
        else {
            alert('Установите версию приложения для iOS по ссылке');
        }
        break;

    case 1:
        if (clientDeviceYear < 2015) {
            alert('Установите облегченную версию приложения для Android по ссылке');
        } else {
            alert('Установите версию приложения для Android по ссылке');
        }
        break;

    default:
        console.log('Неизвестная операционная система');
}