//МАССИВЫ / коллекции

let userNamesArr = ["Make", "Tom", "Mary"];

//длина массива
let userNamesArrLength = userNamesArr.length;
console.log(`userNamesArrLength: ${userNamesArrLength}`);

//обращение к 1-му элементу массива
console.log(`userNamesArr[0]: ${userNamesArr[0]}`);

//изменение 2-го эл-та массива
userNamesArr[1] = "Bob";
console.log(userNamesArr);

//МАССИВЫ С РАЗЛИЧНЫМИ ТИПАМИ ДАННЫХ
let userData = ["Tom", 42, true, null];
console.log(userData);

userData[2] = 1;
console.log(userData);

//вложенные массивы
userData[4] = [10, 20, 30];
console.log(userData);

//вынести в консоль число 30 - 2й элемент вложенного массива
console.log(`userData[4][2]: ${userData[4][2]}`);

//МЕТОДЫ МАССИВА
let colors = ["red", "blue"];

//КОНЕЦ МАССИВА
//добавление элемента/-тов в конец массива
colors.push("pink");
console.log(colors);

colors.push("black", "green");
console.log(colors);

//удаление элеменТА массива из конца массива
colors.pop();
console.log(colors);

//удалили и одновременно сохранили удалённое значение
let lastColor = colors.pop();
console.log(`lastColor: ${lastColor}`);
console.log(colors);

//НАЧАЛО МАССИВА
//добавление элемента в начало массива
colors.unshift("yellow");
console.log(colors);

colors.unshift("orange", "cian");
console.log(colors);

//удаление элемента из начала массива
colors.shift();
console.log(colors);

let firstColor = colors.shift();
console.log(`firstColor: {firstColor}`);
console.log(colors);

//добавление элемента с индексом в несколько раз бОльшим, чем длина массива
let numbersArr = [2, 45, 67];

numbersArr[10] = 90;
console.log(numbersArr);
console.log(numbersArr[3]);
console.log(numbersArr[4]);
console.log(numbersArr[5]);
console.log(numbersArr[6]);
console.log(numbersArr[7]);
console.log(numbersArr[8]);
console.log(numbersArr[9]);
console.log(numbersArr[10]);

console.log(
  "--------------------------------------ЦИКЛЫ----------------------------------------"
);

console.log(
  "--------------------------------------for----------------------------------------"
);

console.log("-----------------печатаем массив colors----------------------");

for (let index = 0; index < colors.length; index++) {
  console.log(`element ${index}: ${colors[index]}`);
}

console.log("-----------------печатаем массив fruits----------------------");

let fruits = ["apple", "cherry", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`element ${i}: ${fruits[i]}`);
}

console.log(
  "--------печатаем и переводим в верхний регистр массив fruits-----------"
);
for (let i = 0; i < fruits.length; i++) {
  console.log(`element ${i}: ${fruits[i].toUpperCase()}`);
}

console.log("-------------------while------------------------------");

console.log("-----------------печатаем массив fruits----------------------");

let i = 0; //переменная должна быть уникальной, не повторяться в нашем коде больше нигде

while (i < fruits.length) {
  console.log(`element ${i}: ${fruits[i]}`);
  i++;
}

("--------------------------------------do while----------------------------------------");
let j = -2;

do {
  console.log(j + 2);
  j++;
} while (j > 0);
