console.log('1');

for (let hi = 0; hi < 2; hi++) {
    console.log('Привет');
}

console.log('2');

for (let num = 1; num <= 5; num++) {
    console.log(num);
}

console.log('3');

for (let num = 1; num <= 25; num++) {
    if (num >= 1 && num <= 6) {
        continue
    } else if (num > 22) {
        continue
    }
    console.log(num)
}

console.log('4');

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}$`)
}

console.log('5');

let count = 0;
for (let n = 1000; n > 50; n /= 2) {
    count++
}
console.log(count);

console.log('6');

let firstFriday = 3;
let month = 31;

for (let day = firstFriday; day <= month; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}