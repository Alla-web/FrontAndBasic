// --------------ОПЕРАТОРЫ СРАВНЕНИЯ ДАННЫХ----------------
//возвращается true или false
console.log(`'12' < '13': ${"12" < "13"}`);

//строки приводятся к номеру символа в Unicode и сравниваются уже коды.
//Т идёт после В и, соответственно его код больше по величне чем код В
console.log(`"Tom" >= "Bob": ${"Tom" >= "Bob"}`);
console.log(`123 < 124: ${123 < 124}`);
console.log(`123 < "124": ${123 < "124"}`);
console.log(`true > false: ${true > false}`);

console.log("-------------строгое равенство-------------------");
console.log(`12=="12": ${12 == "12"}`); // типы привелись
console.log(`12==="12": ${12 === "12"}`); // типы не привелись

console.log(`0 == false: ${0 == false}`); // типы привелись
console.log(`0 === false: ${0 === false}`); // типы не привелись

console.log(`0 == null: ${0 == null}`); //с этим оператором null не приводится к 0
console.log(`0==undefined: ${0 == undefined}`);

console.log("------------не равенство------------------");
console.log(`0 != false: ${0 != false}`);
console.log(`0 !== false: ${0 !== false}`);

console.log("-------------УСЛОВНЫЕ ОПЕРАТОРЫ-------------------");

// let color = "red";

// console.log("-------------if-------------------");
//оператор if используется для последующего выполнения операций

// if (color == "red") {
//     console.log(`Вы выбрали верный цвет ${color}`);
// } else if (color === black) {
//     console.log(`Вы выбрали верный цвет ${color}`);
// } else {
//     console.log(`Вы выбрали неверный цвет`);
// }

// let age = prompt("How old you?");

// if (age >= 18) {
//     alert("Entry allowed");
//     console.log(typeof age);

// } else if (age === null) {
//     prompt("Вы отменили ввод, повторите ещё раз ввод");
//     console.log(typeof age);
// } else if (age < 18) {
//     alert("No entry allowed");
//     console.log(typeof age);
// } else {
//     alert("Некорректный ввод");
//     prompt("Enter your age one more time");
//     console.log(typeof age);
// }

console.log("-------------тернарный оператор-------------------");

//тернарный оператор используется для вывода сообщений
let isAdmin = true;
let message = isAdmin ? "Hello admin" : "Hello user";
console.log(message);

console.log("-------------------------------");

let year = 2024;
let userMessage = year <= 2024 ? "Вы в прошлом или настоящем" : "Вы в будущем";
console.log(userMessage);

console.log("-------------ЛОГИЧЕСКИЕ ОПЕРАТОРЫ СРАВНЕНИЯ-------------------");

console.log("---------------И----------------");

//логические И (true - только если все условия истинны), оператор не - !
let age = 18;
let hasDrivingLicense = true;
let isSick = false;

if (age >= 18 && hasDrivingLicense && !isSick) {
  console.log("You can drive a car");
} else {
  console.log("You can`t drive a car");
}

console.log("--------------ИЛИ-----------------");
//логическое ИЛИ (true - если хотя бы одно из условий истинно)

let userAge = 16;
let isAuth = false;
if (userAge > 18 || isAuth) {
  console.log("Website is unblocked");
} else {
  console.log("Website is blocked");
}

console.log("--------------------SWITCH------------------------");

let randomNumber = Number(
  prompt("введите число от 1 до 7, которое соответствует дню недели")
);
let dayOfWeek;

switch (randomNumber) {
  case 1:
    dayOfWeek = "Monday";
    break;
  case 2:
    dayOfWeek = "Tuesday";
    break;
  case 3:
    dayOfWeek = "Wednesday";
    break;
  case 4:
    dayOfWeek = "Thursday";
    break;
  case 5:
    dayOfWeek = "Friday";
    break;
  case 6:
    dayOfWeek = "Saturday";
    break;
  case 7:
    dayOfWeek = "Sunday";
    break;
  default:
    dayOfWeek = "Invalid day";
}
alert(dayOfWeek);

