console.log("-----------------map()немутирующий, возвращающий-------------");
console.log("--------------------------Задача 1---------------------------");
/*
Задача 1: Удвоение чисел
У вас есть массив чисел. Создайте новый массив, где каждое число из исходного массива умножено на 2.
Пример:
Исходный массив: [1, 2, 3, 4, 5]
Результат: [2, 4, 6, 8, 10]
*/

const numbArray = [1, 2, 3, 4, 5];

const doubleNumbArray = numbArray.map((number) => number * 2);
console.log(doubleNumbArray);

console.log("--------------------------Задача 2---------------------------");
/*
Задача 2: Преобразование строк в верхний регистр
У вас есть массив строк. Создайте новый массив, где все строки будут в верхнем регистре.

Пример:
Исходный массив: ["apple", "banana", "cherry"]
Результат: ["APPLE", "BANANA", "CHERRY"]

Подсказка:
Используйте метод map() и функцию .toUpperCase() для преобразования строк.
*/

const strArray = ["apple", "banana", "cherry"];

const upperStrArray = strArray.map((string) => string.toUpperCase());
console.log(upperStrArray);

console.log("--------------------------Задача 3----------------------------");
/*Задача 3: Извлечение определённого свойства из объектов
У вас есть массив объектов, содержащих данные о пользователях. 
Создайте новый массив, содержащий только имена пользователей. 
*/

const usersInfo = [
  { name: "Alla", age: 40, city: "Kharkow" },
  { name: "Katja", age: 50, city: "Kijiw" },
  { name: "Olja", age: 36, city: "Sumi" },
  { name: "Olja", age: 39, city: "Odessa" },
];

const userNames = usersInfo.map((user) => user.name);
console.log(userNames);

console.log("--------------------------Задача 4----------------------------");
usersInfo.map((item, index, array) => {
  console.log(`Array elemet ${item} under index ${index} from array ${array}`);
});

console.log("-----------forEach() немутирующий, не возвращающий-----------");

console.log("--------------------------Задача 1---------------------------");
/*Вывод элементов массива
У вас есть массив чисел. Используйте метод forEach() для вывода каждого числа в консоль. */

const numberArr = [5, 10, 15, 20];
numberArr.forEach((item, index, array) => {
  console.log(`Value ${item} under index ${index} from array: ${array}`);
});

console.log("--------------------------Задача 2---------------------------");
/*Задача 2: Подсчёт суммы элементов массива
Используйте метод forEach() для подсчёта суммы всех чисел в массиве. 
Результат сохраните в переменной и выведите в консоль.

Пример:
Исходный массив: [5, 10, 15, 20]
Результат: 50 */

let sum = 0;
numberArr.forEach((number) => (sum += number));
console.log(`sum: ${sum}`);

console.log("--------------------------Задача 3---------------------------");
/*
Задача 3: Преобразование массива объектов
У вас есть массив объектов, каждый из которых содержит имя и возраст человека. 
Используйте метод forEach() для создания нового массива, содержащего только имена.
*/

console.log(usersInfo);

const usersNames = [];

usersInfo.forEach((user) => {
  console.log(user);
  userNames.push(user.name);
});

console.log(userNames);

const usersIndex = [];

usersInfo.forEach((index) => {
  usersIndex.push(index);
});

console.log(usersIndex);

console.log("-----------filter() немутирующий, возвращающий-----------");

console.log(usersInfo);
//отфильтруем юзеров старше 40 лет
const filteredUsers = usersInfo.filter((user) => user.age >= 40);
console.log(filteredUsers);

//отфильтруем юзеров c именем Olja
const filteredUsers1 = usersInfo.filter((user) => user.name >= 40);
console.log(filteredUsers);

