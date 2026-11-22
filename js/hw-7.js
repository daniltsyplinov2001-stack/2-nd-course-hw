
function rockPaperScissors() {
  const choices = ["камень", "ножницы", "бумага"];

  const userChoice = prompt(
    "Выберите: камень, ножницы или бумага"
  );

  if (userChoice === null) {
    return;
  }

  const user = userChoice.toLowerCase().trim();

  if (!choices.includes(user)) {
    alert("Некорректный выбор!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  let result;

  if (user === computerChoice) {
    result = "Ничья!";
  } else if (
    (user === "камень" && computerChoice === "ножницы") ||
    (user === "ножницы" && computerChoice === "бумага") ||
    (user === "бумага" && computerChoice === "камень")
  ) {
    result = "Вы победили!";
  } else {
    result = "Компьютер победил!";
  }

  alert(
    `Ваш выбор: ${user}\n` +
    `Выбор компьютера: ${computerChoice}\n` +
    `Результат: ${result}`
  );
}


//1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//2

function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === "male";
}

function filter(arr, ruleFunction) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" }
];

console.log(filter(people2, isMale));

//3

const interval = setInterval(() => {
  console.log(new Date());
}, 3000);

setTimeout(() => {
  clearInterval(interval);
  console.log("30 секунд прошло");
}, 30000);

//4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

//5

function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');

    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Передаём callback, не вызывая sayHi сразу
delayForSecond(() => sayHi('Глеб'));
