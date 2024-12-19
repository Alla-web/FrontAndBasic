//метод console.log() выводит сообщение (или переданные данные) в консоль
// console.log("JS work");

// console.log("JS work2");

// ТИПЫ ПЕРЕМЕННЫХ
// изменяемая переменная let

//объявили переменную
let userName;

//присваиваем значение переменной
userName = "Tom";
// console.log(userName);

//изменение переменной
userName = "Bob";
// console.log(userName);

//копирование переменной
let customerName = userName;
console.log(customerName);

//неизменяемая переменная const
const message = "Hello";
// console.log(message);

// message = "Hello, Tom"; - ошибка, нельзя переназначить константу
// console.log(message);

const newName = customerName;
console.log(newName);
// newName = "Mary"; - ошибка, нельзя переопределить константу

//Именя для переменных
let test = "test";
// let test="test"; - нельзя создавать переменные с одинаковыми именами

// let 1test; - имя перменной не должно начинаться с цифры

// let test.1; - через точки и запятые воспринимает имя переменной как перечисление

let test_1; // верное имяпеременной

//ТИПЫ ДАННЫХ

// String
let userName1 = "John";

// Number
let year = 1998;
let price = 35.5;
let infinity = Infinity;
let exampler = NaN;

// BigInt
let bidInt = 900719925474099102020n;

// Boolean
let isAdmin = true;
// isAdmin = false;

// null
let emptyValue = null;

// Undefined
let data = undefined;

// Symbol
let sym = Symbol();
console.log(sym);

// Object (объекты, массивы, функции)
let userData = {
  userName: "Nick",
};

let testType = typeof userName1;
console.log(testType);
