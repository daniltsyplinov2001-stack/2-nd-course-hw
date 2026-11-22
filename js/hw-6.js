// Сюжетка

const randomNum = Math.floor(Math.random() * 100) + 1

function randomUserNumber() {

    let userNumber = Number(prompt('Угадайте число от 1 до 100'))

    while (userNumber !== randomNum) {
        randomNum > userNumber
            ? alert('Загаданное число больше')
            : alert('Загаданное число меньше')

        userNumber = Number(prompt('Попробуйте еще раз'))
    }

    alert('Поздравляю, ты угадал число!')
}

function mathGame() {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1

    const operators = ['+', '-', '/', '*']
    const randomOperators = Math.floor(Math.random() * operators.length)
    const operator = operators[randomOperators]

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break
        case '*':
            result = num1 * num2;
            break;
    }

    const userAnswer = Number(prompt(`Сколько будет ${num1} ${operator} ${num2} ?`))

    userAnswer === result
        ? alert('Правильно')
        : alert(`Не прввильно, ответ ${result}`)
}

function reverText() {
    const userText = String(prompt('Введите текст'))
    const reverUserText = userText.split('').reverse().join('')
    alert(reverUserText)
}

// Второстепенные задачи
//1
const uperCase = 'js'
console.log(uperCase.toUpperCase());

//2
function filterWords(arr, str) {
    return arr.filter(word =>
        word.toLowerCase().startsWith(str.toLowerCase())
    )
}

const words = ['JavaScript', 'Java', 'Python', 'javascript', 'React']

console.log(filterWords(words, 'ja'));

//3
const num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num)); 
console.log(Math.round(num));

//4
const numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//5
console.log(Math.floor(Math.random() * 10) + 1)

//6
function randomNumbers(num) {
    const arr = [];

    for (let i = 0; i < Math.floor(num / 2); i++) {
        const randomNum = Math.floor(Math.random() * (num + 1));
        arr.push(randomNum);
    }
    return arr;
}

console.log(randomNumbers(10));

//7
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(5, 10));

//8
const currentDate = new Date();
console.log(currentDate);

//9
const currentDate2 = new Date();
const futureDate = new Date(currentDate2);

futureDate.setDate(futureDate.getDate() + 73);
console.log(futureDate.toLocaleDateString('ru-RU'));

//10
function formatDate(date) {
    const day = date.getDate();

    const month = date.toLocaleString('ru-RU', {
        month: 'long'
    });

    const year = date.getFullYear();

    const weekDay = date.toLocaleString('ru-RU', {
        weekday: 'long'
    });

    const time = date.toLocaleTimeString('ru-RU');

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.
Время: ${time}`;
}

console.log(formatDate(new Date()));
