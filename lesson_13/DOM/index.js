// ВЫБОР элемента

// по id
let cardContainer = document.getElementById("card-container");
console.log(cardContainer);

// по селектору querySelector
let listElement = document.querySelector("#last-element");
console.log(listElement);

let listEl = document.querySelector("li");
console.log(listEl);

//селектор - querySelectorAll
let listItems = document.querySelectorAll("li");
console.log(listItems);

//добавление элементов на страницу

// Шаг 1. Создание элемента - метод createElement()
let newListItem = document.createElement("li");
// Шаг 2. Заполнение контентом - свойство textContent
newListItem.textContent = "Surname: Smith";
// Шаг 3. Выбрать элемент на странице, к торому мы хоитм прикрепить наш элемент
let list = document.querySelector("ul");
// Шаг 4. Добавляем на страницу созданный элемент с помощью различных методов: 
// list.before(newListItem); // добавляется как сосед спереди
// list.after(newListItem); // добавляется как сосед сзади
// list.prepend(newListItem); // добавляется как дочерний элемент в начало
list.append(newListItem); // добавляется как дочерний элемент в конец