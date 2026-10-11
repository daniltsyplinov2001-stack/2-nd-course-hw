// 1

let a = 10;
alert(a);
a = 20;
alert(a);

// 2

let iPhoneRelease = 2007;
alert(iPhoneRelease);

// 3

let nameCreatorJS = "Brendan Eich";
alert(nameCreatorJS);

// 4

let num1 = 10;
let num2 = 2;

alert(`Сумма: ${num1 + num2}, разность: ${num1 - num2}, деление: ${num1 / num2}`);

// 5

let numb = 2;
let expontent = 5;
let result = numb ** expontent;
alert(result);

// 6

a = 9;
let b = 2;
alert(a % b);

// 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// 8

let age = Number(prompt('Сколько вам лет?'));
alert(age);

// 9

let user = {
    name: 'Данил',
    age: 25,
    isAdmin: true,
}

// 10

let youName =prompt('Ваше имя?');
alert(`Привет, ${youName}`);

// ------------------------------

// Доп задание
// 1

let number = Number(prompt('Загадайте число'));
let numberDuble = number * 2;
// alert(`Ваше удвоенное число ${numberDuble}`);
let numberSum = numberDuble + 10;
// alert(`Прибавили к числу: ${numberSum}`);
let numberDivide = numberSum / 2;
// alert(`Разделили число: ${numberDivide}`)
let numberSubtraction = numberDivide - number
// alert(`Результат - ваше число: ${numberSubtraction}`)
alert(`
    ${number} * 2 = ${numberDuble}
    ${numberDuble} + 10 = ${numberSum}
    ${numberSum} / 2 = ${numberDivide}
    ${numberDivide} - ${number} = ${numberSubtraction}
    `);