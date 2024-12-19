console.log("---------------map() немутирующий, возвращающий--------------------");

//map - выполняет созданную нами функцию для каждого элемента массива (немутирующий метод)
const animals = ["cat", "dog", "hors"];

//метод map() принимает в какчестве аргумента функцию callback
//функция callback имеет 3 параметра:
//1) item - элемент массива
//2) index - индекс элемента массива
//3) array - исходный массив

// под капотом цикл, который прохордится по всем элементам сохраняет их в item по index из array
animals.map((item, index, array) => {
  console.log(
    `Элемент массива ${item}, с индексом ${index} из массива ${array}`
  );
});

// метод map() при работе возвращаем новый массив в соответствии с тем, что будет возвращено в функции callback
const animalsNameLength = animals.map((animal) => {
  return animal.length;
});
console.log(animalsNameLength);
console.log(animals); //[ 'cat', 'dog', 'hors' ] - исходный массив не поменялся

console.log("-----------------forEach() немутирующий, не возвращающий-------------------");
//выполняет функцию для каждого элемента массива (немутирующий метод)
//в отличии от map()ничего не возвращает - нет смысла сохранять его в переменную,
//а следует вызывать для выполнения какого-то действия
//функция callback имеет 3 параметра:
//1) item - элемент массива
//2) index - индекс элемента массива
//3) array - исходный массив
const list = document.querySelector("#list"); //переменная куда мы будем добавлять наши элементы
const addStuleButton = document.querySelector("button");

const cars = ["BMV", "Tesla", "Toyota"];

cars.forEach((car)=>{
const listItem = document.createElement("li");
listItem.textContent = car;
list.append(listItem);
});

console.log("----------------добавляем стили в document----------------------");
const addStyles = () => {
  list.setAttribute("class", "style-list");
}

addStuleButton.addEventListener("click", addStyles);

console.log("----------------filter() немутирующий, возвращающий--------");
//метод для фильтрации исходного массива. Этот метод возвращает массив (не мутирующий метод),
// но только с элементами, которые прошли проверку (по заданным в нем условиям)
// принимает функцию callback с базовыми 3-мя параметрами

//создаём данные с которыми потом будем работать
const products = [
  { productName: "Milk", price: 7 },
  { productName: "Bread", price: 5 },
  { productName: "Eggs", price: 8 },
  { productName: "Grape", price: 10 },
];

//задача: сформировать новый массив в котором будут только те продукты,
// стоимость которых не привышает 8

//создаем массив, куда мы сохраним наши отфильтрованные объекты
const filteredProducts = products.filter((product) => product.price >= 8); //product.price >= 8 - тело функции
console.log(filteredProducts);
console.log(products);

console.log("---------------------reduce() -----------------------------");
// возвращает определённое значениее, на основе заданного массива
const numbersArray = [10, 5, 9, 3];

const sum = numbersArray.reduce((accumulator, number) => {
    console.log(`${accumulator} | ${number}`);  
    return accumulator + number;  
});
console.log(sum);
