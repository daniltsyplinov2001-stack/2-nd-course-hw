const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function quizAnswer() {
    let count = 0;

    for (let item of quiz) {
        let popup = Number(
            prompt(`${item.question}
${item.options.join("\n")}`)
        );

        if (popup === item.correctAnswer) {
            count++;
        }
    }

    alert(`Количество правильных ответов: ${count}`);
}

quizAnswer();



// Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i])

    if (arr[i] === 10) {
        break
    }
}


//Задание 2
const arr2 = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(`под индексом ${i}`)
        break
    }
}


//Задание 3
const arr3 = [1, 3, 5, 10, 20]

console.log(arr3.join(' '))


//Задание 4
const arr4 = []

for (let i = 0; i < 3; i++) {

    const innerArr = []

    for (let j = 0; j < 3; j++) {
        innerArr.push(1)
    }

    arr4.push(innerArr)
}

console.log(arr4)


//Задание 5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2)
console.log(arr5);


//Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5]
const newArr6 = arr6.sort().filter(
    n => typeof n === 'number'
)

console.log(newArr6)


//Задание 7
const arr7 = [9, 8, 7, 6, 5];

let popup2 = Number(prompt('Угадайте число'));

let isFound = false;

for (let item of arr7) {
    if (popup2 === item) {
        isFound = true;
        break;
    }
}

if (isFound) {
    alert('Угадал!');
} else {
    alert('Не угадал!');
}


//Задание 8
const str = 'abcdef'
const str2 = str.split('').reverse().join('')
console.log(str2);


//Задание 9
const arr8 = [[1, 2, 3], [4, 5, 6]];
const result = [...arr8[0], ...arr8[1]];

console.log(result);


//Задание 10
const arr9 = [2, 5, 7];

for (let i = 0; i < arr9.length - 1; i++) {
  console.log(arr9[i] + arr9[i + 1]);
}


//Задание 11
function square(arr) {
    let result = arr.map(num => num ** 2)
    return result
}

console.log(square([2, 4, 6]));


//Задание 12
function getWordsLength(arr) {
    return arr.map(word => word.length);
}

console.log(getWordsLength(['Привет', 'Мир', 'JavaScript']));


//Задание 13
function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0)
}

console.log(getNegativeNumbers([1, -2, 3, -4]));


//Задание 14
const arr10 = [];

for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 11);
    arr10.push(randomNum);
}

const evenNumbers = arr10.filter(num => num % 2 === 0);

console.log('Исходный массив:', arr10);
console.log('Чётные числа:', evenNumbers);


//Задание 15
const arr11 = [];

for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    arr11.push(randomNum);
}

const sum = arr11.reduce((acc, num) => acc + num, 0);

const average = sum / arr11.length;

console.log('Массив:', arr11);
console.log('Среднее арифметическое:', average);