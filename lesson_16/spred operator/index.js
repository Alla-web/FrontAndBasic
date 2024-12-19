console.log("----------получение массивов ключей и объектов----------");
const colors = {
  nameColor: "white",
  code: "#ffff",
  priceInfo: {
    price: 10,
    sale: true,
  },
};

console.log("---------------------получаем массив ключей объекта: object.keys-----------------------");
const colorKeysArrey = Object.keys(colors);
console.log(colorKeysArrey);

console.log("---------------------получаем массив значений объекта: object.values-----------------------");
const colorValuesArrey = Object.values(colors);
console.log(colorValuesArrey);

console.log("----------Object.entries (keys + values)-----------------");
const colorKeysValuesArray = Object.entries(colors);
console.log(colorKeysValuesArray);

console.log("-----------деструктуризация (spred-оператор) -------------");

console.log("--------------------------arrays--------------------------");
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6, 7]; //массив а остается при этом без изменений
console.log(arr1);
console.log(arr2);

//пример2
const fruits = ["apple", "grape", "cherry"];
const copyfruits = [...fruits];
console.log(fruits);
console.log(copyfruits);

copyfruits.push("banana");
console.log(fruits);
console.log(copyfruits);

const shopFruits = [...fruits, "kiwi", "lemon"];
console.log(shopFruits);

console.log("--------------------task-----------------------------");
//соединить массивы shopFruits и copyfruitsс помощью spred-оператор
const fruitsBigArray = [...shopFruits, ...copyfruits];
console.log(fruitsBigArray);

console.log("----------------------Objects-------------------------");
const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { ...obj1, key3: "value3", key4: "value4" };
console.log(obj1);
console.log(obj2);

//пример 2
const bookObj = {
  bookName: "Great Gatsby",
  price: 20,
};

const newBookObj = { ...bookObj, author: "Fitzgerald" };
console.log(newBookObj);

console.log("-------разбиение массивов при помощи spred-оператор---------");
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3]; //данные пришли с сервера в виде массива
console.log(sum(...numbers)); // альтернатива numbers[0], numbers[1], numbers[2]

console.log("----------------деструктурирующее присвамвание--------------");
console.log("----------------arrays--------------");
const colorsArr = ["red", "blue"];

//базовый способ копирования элемента массива в отдельную переменную
// const red = colorsArr[0];
// const blue = colorsArr[1];
// console.log(red, blue);

//копирование элементов массива и сохранение их в переменную с пом. деструктивного присваивания
// тип переменной [ название 1-й переменной, названире 2-й переменной] = массив из которого мы берём данные
const [red, blue] = colorsArr;
console.log(red);
console.log(blue);

console.log("----------------Oblects--------------");

const fruitObj = {
  fruitName: "kiwi",
  price: 2,
};

//базовый способ копирования значений в отдельную переменную: обращаемся к объекту, потом к его свойству
const fruitTitle = fruitObj.fruitName;
const fruitPrice = fruitObj.price;
console.log(fruitTitle);
console.log(fruitPrice);

//копирование значений из объекта и сохранение в отдельную переменную с пом. ДЕСТРУКТИВНОГО ПРИСВАИВАНИЯ
//тип переменной {имя 1-го свойства объекта, имя 2-го свойства объекта} = объект из которого берутся значения свойств
const {fruitName, price} = fruitObj;
console.log(fruitName);
console.log(price);

//но можно использовать ПСЕВДОНИМ через двоеточие
const {fruitName : fruitPsevdonim, price : fruitPricePsevdonim,} = fruitObj;
console.log(fruitPsevdonim);
console.log(fruitPricePsevdonim);

//если у нас нет аткого свойства, чтобы мы не получили undefined в свойстве, которого нет у объекта
// FruitShop - это значение по умолчанию, если такого свойства не было у объектав
const {fruitName : fruitPsevdonim1, price : fruitPricePsevdonim1, shop = "FruitShop"} = fruitObj;
console.log(fruitPsevdonim);
console.log(fruitPricePsevdonim);







