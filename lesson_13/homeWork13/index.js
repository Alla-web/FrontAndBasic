/*
Задание
Создайте HTML-документ с нумерованным списком ol, содержащим первоначально 5 элементов li.

Необходимо: добавить два новых элемента li. Один - в начало списка, второй - в конец списка. 
Новые элементы должны быть дочерними элементами списка ol

Примечание: содержание элементов списка и стилизация на ваше усмотрение
*/

// Шаг 1. Создание элемента - метод createElement()
let newListItem1 = document.createElement("li");
let newListItem2 = document.createElement("li");

// Шаг 2. Заполнение контентом - свойство textContent
newListItem1.textContent = "New item (1)";
newListItem2.textContent = "New item (2)";

// Шаг 3. Выбрать элемент на странице, к торому мы хоитм прикрепить наш элемент, - querySelector()
let list = document.querySelector("ol");

// Шаг 4. Добавляем на страницу созданный элемент с помощью различных методов: 
list.prepend(newListItem1);
list.append(newListItem2);


//-------------------------------------Екатеорна-------------------------------------------

// Шаг 1. Выбор елемента по ID
let list2 = document.getElementById("third_item");

//Шаг 2. Добавление элемента
const newItem3 = document.createElement("li");

newItem3.textContent = "New item (3)";

//Шаг . Добавляем в html-структуру
list2.after(newItem3); // сосед снизу, а не дочерний элемент (как при append / prepend)






