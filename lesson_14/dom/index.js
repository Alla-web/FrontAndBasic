// изменение содержимого элемента html
//с помощью свойства textContent

console.log(
  "-----------chahge content of HTML-element (textContent)----------"
);
//выбрали елемент, с которым будем дальше работать
const mainTitle = document.getElementById("main-title");
console.log(mainTitle.textContent);

//меняем контент выбранного элемента
mainTitle.textContent = "Main title";
console.log(mainTitle.textContent);

console.log(
  "---------------меняем содержимое HTML-element (innerHTML)----------------"
);
//меняем содержимое элемнета HTML
const cardTitle = document.getElementById("card-title");
console.log(cardTitle);

let avatarImg = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

cardTitle.innerHTML = `
<a href="" target"_blank">Profile link</a>
<img src=${avatarImg}>
`;

console.log("-----change styles CSS of HTML-element-----------");
//меняем стили

const root = document.getElementById("root");
root.style.background = "cyan";

console.log("---------------delete HTML-element----------------");
//удаляем элемент, который отвечает за возраст
const lastElement = document.getElementById("last-element");

lastElement.remove();

console.log("---------------Обработка событий----------------");

console.log("---------------нажатие на кнопку - click----------------");
//при нажатии на одну кнопку карточка убирается, а при нажатии на другую - добавляется

//выбираем элементы, скоторыми будем далее работать
const addButton = document.querySelector(".add-button");
const hideButton = document.querySelector(".hide-button");
const card = document.getElementById("card-container");

//прописываем логику - функции
//прячем карточку
// const hideCard = () => {
// card.style.opacity = "0";
// }

//2-й вариант
const hideCard = () => {
  card.style.display = "none"; //hiden
};

//показать карточку
// const addCard = () => {
//     card.style.opacity = "1";
// }

//2-й вариант
const addCard = () => {
  card.style.display = "flex"; //вернули исходное значение
};

//привязка логики к обработчикам событий
hideButton.addEventListener("click", hideCard);
addButton.addEventListener("click", addCard);

console.log("---------------наведение мышкой - change--------------");

//выбираем элементы, скоторыми будем далее работать
const searchFild = document.getElementById("input-search");

//прописываем логику - функцию
const changeSearch = (event) => {
  console.log(event.target);
  console.log(event.target.value);
  console.log(event.type);
};

//привязка логику к обработчику событий
searchFild.addEventListener("change", changeSearch);
