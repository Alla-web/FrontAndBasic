//alert
// alert("You seccsesfull go!");

//prompt
// let age = prompt("Enter your age", 21);
// console.log(age);

//confirm
// let isAdmin = confirm("Are you admin?");
// console.log(isAdmin);

//Шаблонные строки
let age = 23;
let message = `Your age: ${age}`;
console.log(message);

console.log(`-------------------МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ-------------------------`);

let x = 13;
let y = 2;

//сложение
let result = x + y;
console.log(`сложение: ${result}`);

//вычитание
console.log(`вычитание: ${x - y}`);

//умножение
console.log(`умножение: ${x * y}`);

//деление
console.log(`деление: ${x / y}`);

//остаток от деления
console.log(`остаток от деления: ${x % y}`);

//проверка чётное ли число?
console.log(`проверка чётное ли число?: ${x % 2}`);
console.log(`проверка чётное ли число?: ${300 % 2}`);

//возведение в степень
console.log(`возведение в степень: ${x ** y}`);

console.log(`-------------------ПРИВЕДЕНИЕ ТИПОВ ДАННЫХ-------------------------`);

console.log(`---------сложение----------------`);
//ВАЖНО: только при сложении, если первоая строка, то остальные участники тоже становятся строкой
let userName = "Bob";
console.log(userName + 3);
console.log(userName + 2 + 3); // строка приобразовала 2 в строку и так по цепочке
console.log(userName + true);
console.log(userName + " " + null);

console.log(`---------остальные операнды----------------`);
console.log(`"12"-3: ${"12"-3}`);
console.log(`3-"Tom": ${3 - "Tom"}`);
console.log(`"3"-"Tom": ${3 - "Tom"}`);

console.log(`--------------------------`);
console.log(`true-2: ${true - 2}`); //true - преобразовалось в 1
console.log(`false-2: ${false - 2}`); //false - преобразовалось в 0

console.log(`--------------------------`);
console.log(`undefined-3: ${undefined - 3}`); //=NaN - undefined не преобразовалось в число

console.log(`--------------------------`);
console.log(`3-null: ${3 - null}`); //=3 - null преобразовалcz в число

console.log(`--------------------------`);
console.log(`100/0: ${100/0}`);


console.log(`------------------Преобразование типов через встроенные функции--------------------`);

console.log(`-------преобразуем в строку:--------`);
let newString = String(-23); // -23 - строка
console.log(typeof newString);

console.log(`--------------------------`);
let newString2 = String(undefined);
console.log(newString2);
console.log(typeof newString2);

console.log(`-------преобразуем в число:--------`);
let newNumber = Number(`123`);
console.log(`Number("123"): ${newNumber}`);
console.log(typeof newNumber);

console.log(`--------------------------`);
let newNumber2 = Number(`Bob`);
console.log(`Number("Bob"): ${newNumber2}`);
console.log(typeof newNumber2);

console.log(`--------------------------`);
let newNumber3 = Number(undefined);
console.log(`Number(undefined): ${newNumber3}`);
console.log(typeof newNumber3);

console.log(`--------------------------`);
let newNumber4 = Number(null);
console.log(`Number(null): ${newNumber4}`);
console.log(typeof newNumber4);

console.log(`--------------------------`);
let newNumber5 = Number(true);
console.log(`Number(true): ${newNumber5}`);
console.log(typeof newNumber5);

console.log(`-------преобразуем в boolean:--------`);
let newBoolean = Boolean(`Hi`);
console.log(`Boolean("Hi"): ${newBoolean}`);
console.log(typeof newBoolean);

console.log(`--------------------------`);
let newBoolean2 = Boolean(``); // =false, без пробела, пустая строка
console.log(`Boolean(``): ${newBoolean2}`);
console.log(typeof newBoolean2);

console.log(`--------------------------`);
let newBoolean3 = Boolean(` `); // =true, пробел считается символом, а наличие символа даёт true
console.log(`Boolean(` `): ${newBoolean3}`);
console.log(typeof newBoolean3);

console.log(`--------------------------`);
let newBoolean4 = Boolean(0); // =false, 0 единственное число, которое преобразуется в false
console.log(`Boolean(0): ${newBoolean4}`);
console.log(typeof newBoolean4);

console.log(`--------------------------`);
let newBoolean5 = Boolean(null); // =false, пустота преобразуется в false
console.log(`Boolean(null): ${newBoolean5}`);
console.log(typeof newBoolean5);

console.log(`--------------------------`);
let newBoolean6 = Boolean(undefined); // =false, undefined преобразуется в false
console.log(`Boolean(undefined): ${newBoolean6}`);
console.log(typeof newBoolean6);