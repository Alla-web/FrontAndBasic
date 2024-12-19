let stringExample = "PlEase select    age";

console.log("---------------------------length-------------------------------");

console.log(`stringExample.length: ${stringExample.length}`);

console.log(
  "---------------------------toUpperCase()-------------------------------"
);
console.log(`stringExample.toUpperCase(): ${stringExample.toUpperCase()}`);
console.log(`stringExample: ${stringExample}`);

console.log(
  "---------------------------toLowerCase()-------------------------------"
);
console.log(`stringExample.toLowerCase(): ${stringExample.toLowerCase()}`);

console.log(
  "----------------toLowerCase(substring(индекс с, индекс до)--------------"
);
//не добавляет элементов между началом и концом предела подстроки
console.log(`stringExample.substring(1,6): ${stringExample.substring(1, 6)}`);
let subString = stringExample.substring(1, 26);
console.log(`subString.length: ${subString.length}`);

console.log(
  "-------------------------------indexOf()----------------------------------"
);
console.log(stringExample.indexOf("ape"));

console.log(
  "-------------------------------indexOf()----------------------------------"
);
let str = "Hello, JS";

let strArr = str.split(" ");
console.log(strArr);

let strArr2 = str.split("");
console.log(strArr2);

console.log("--------------------FUNCTION-----------------------------");

console.log(
  "--------------------function declaration-------------------------"
);
//вызвать функцию можно раньше, чем мы её объявили
console.log(getSum(3, 4));

//объявление функции
function getSum(x, y) {
  let result = x + y;
  return result;
}

//вызов функции
let sum = getSum(3, 4);
console.log(sum);

console.log("--------------------function expression-------------------------");
//showMessage("Bob"); - ошибка, переменная, в которую мы присвоили функцию ещё создана ниже

let showMessage = function (name) {
  console.log(`Hello, ${name}`);
};

showMessage("Alla"); // Hello, Alla
showMessage("Tom"); // Hello, Tom

showMessage(); // Hello, undefined

console.log(
  "---------------function expression со значением по умолчанию-----------------"
);
let showMessage2 = function (name = "user") {
  //user - мы указали значение по умолчанию
  console.log(`Hello, ${name}`);
};

showMessage2("Alla"); // Hello, Alla
showMessage2(); // Hello, user

console.log("-----function expression со значением по умолчанию-------");

let message = "Hello";
let showMessage3 = function (name = "user") {
  //user - мы указали значение по умолчанию
  let message = `Hello, ${name}`;
  console.log(message);
};

showMessage3();
console.log(message);

console.log("-------------------arrow function--------------------");
//только для однострочных функций
let getDivide = (n) => n / 2;
let resultDivide = getDivide(6);
console.log(resultDivide);

let getDivide1 = (n) => {
  return n / 2;
}; //без return получим в getDivide1 undefined!
let resultDivide1 = getDivide1(6);
console.log(resultDivide1);

console.log("-------------------callback function--------------------");
//передача функции в качетсве аргумента (callback function / функция обратного вызова)
let showOperationResult = (x, y, operationFunc) => {
    let result = operationFunc(x, y);
    console.log(`Result of your operation: ${result}`);
};

// пример в одну строку
// let showOperationResult = (x, y, operationFunc) => console.log(operationFunc(4, 8, add));



let add = (a, b) => a + b;
let divide = (c, d) => c / d;

showOperationResult(4, 8, add);
showOperationResult(8, 4, divide);


console.log("-------------------var--------------------");
// hosting (поднятие переменных), var - устаревший способ содания перменных (изменяемых)
console.log(z); //обращаемся к переменных раньше их обьявления

let x = 2; // ошибка, нельзя определеиться к переменной до её объявления
const y = 3; // ошибка, нельзя определеиться к переменной до её объявления
var z = 3; // undefined

//циклы с var
console.log("-----------------------циклы var-------------------------------");

for (var i = 0; i < 3; i++) {
    console.log(i);   
}
console.log(i);

console.log("-----------------------циклы let-------------------------------");
for (let i = 0; i < 3; i++) {
    console.log(i);   
}
console.log(i);



