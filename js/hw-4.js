// 1
console.log('1 Задание');
const compare = (a, b) => {
    if (a > b) {
        return b
    } else if (a < b) {
        return a
    } else {
        return a
    }
}

console.log(compare(5, 5));


// 2
console.log('2 Задание');
const EvenOrOdd = (n) => {
    n % 2 === 0 
    ? 'Четное'
    : 'Не четное';
}

console.log(EvenOrOdd(3)); 


// 3
console.log('3 Задание');

const degree = n => n**2

const degree1 = n => {
    console.log(n ** 2)
}

degree1(3)
console.log(degree(3)); 


// 4
const examination = () => {
    let num = Number(prompt('Введите число'))

    if (num < 0) {
        alert('Вы ввели неправильное значение');
    } else if (num <= 12 ) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

examination()


// 5
console.log('5 Задание');
const correctNumber = (a, b) => {
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }

    return a * b; 
}

console.log(correctNumber(2, 2));


// 6
const CheckTheNumber = () => {
    let num = Number(prompt('Введите число'));

    return isNaN(num)
        ? 'Переданный параметр не является числом'
        : `${num} в кубе равняется ${num**3}`
}

CheckTheNumber();


// 7
console.log('7 Задание');

function getArea () {
    return Math.PI * (this.radius**2)
}

function getPerimeter () {
    return 2 * Math.PI * this.radius
}

const circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter
}

const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}

console.log(`Площадь ${circle2.getArea()}`); 
console.log(`Радиус ${circle2.getPerimeter()}`); 