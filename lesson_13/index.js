console.log("-----------Objects----------------------");
// это тоже коллекции данных, но неупорядоченных в отличие от массивов,
// где каждый элемент под своим индексом.
// Объект содержит пары - ключ + значение, разделённые через двоеточие
// можно создать пустой объект, а потом его заполнить

console.log("--------empty Object---------------");
let emptyUserData = {}; // пустой объект
console.log(emptyUserData);

console.log("--------filled Object---------------");
let person = {
  //всё, что в блоке - это свойства объекта
  userName: "Bob",
  age: 23,
  isAdmin: false,
};
console.log(person);

console.log("--------add new propertis---------------");
emptyUserData.name = "Tom";
console.log(emptyUserData);

console.log("--------change existing propertis---------------");
person.isAdmin = true;
console.log(person);

console.log("--------get value of property from Object---------------");
console.log(person.userName);

let userNameOfPerson = person.userName;
console.log(userNameOfPerson);
console.log(person); // объект не изменился

userNameOfPerson = "Mary";
console.log(userNameOfPerson);

console.log("--------delete property from Object---------------");
console.log(person);
delete person.age;
console.log(person); // возраст удалился

console.log("--------брэкет синтаксис---------------");
//способ работы с ключами объекта

let user = {
  // likes bird: - ошибка, так называть нельзя
  ["likes bird"]: true,
};

console.log(user["likes bird"])

console.log("--------брэкет синтаксис и подстановка---------------");
//с помощью брэкет-синтаксива можно подставлять переменныe вместо ключей

let key = "isAdmin";
console.log(person[key]);

let key2 = "userName";
console.log(person[key2]);

console.log("----------------оператор in----------------------");
//оператор in позволяет посмотреть - есть ли свойство у оъекта?

let animalDate = {
    animalName: "Monkey",
    age: 4,
    city: "Berlin",
};

//проверяем наличие определенного свойства у объекта animalDate
console.log(animalDate.city); // возвращает undefined если свойства нет

let checkKey = "city";
if (checkKey in animalDate) {
    console.log(`Искомое значение свойства: ${animalDate[checkKey]}`);        
} else {
    console.log(`Свойство с ключем ${checkKey} не найдено`);    
}

console.log("-----------------оператор for in-----------------");

//перебор ключей объекта с помощью оператора for in
for (let key in animalDate) {
    console.log(`${typeof key}: ${key} | ${typeof animalDate[key]}: ${animalDate[key]}`);  
}

console.log("-----------------сложная структура объекта-----------------");
let bookStore = {
    shopName: "Books",
    booksList: [
        {price: 20, bookName: "Book1"}, //объекты массива
        {price: 25, bookName: "Book2"}, //объекты массива
    ],
    showSlogan: () => {   //функция, которая называется showSlogan и является методом объекта
        console.log("Book world");        
    }
}

//взять имя книги из 2-го объекта массива книг
console.log(bookStore.booksList[1].bookName); // Book2

//вызываем метод объекта
bookStore.showSlogan(); // Book world

console.log("-----------------Reference type (ссылочные типы данных)-----------------");
//ссылочные типы данных - объекты, массивы и функции
console.log("-----------------копируем примитивные данные-----------------");
let userAge = 40;
let age = userAge;
console.log(userAge, age); // 40 40

age = 41;
console.log(userAge, age); // 40 41

console.log("-----------------копируем ссылочные данные - объекты-----------------");

// тип объекта const customer / const seller не позволяет менять ссылку на объект, 
// но изменение самих свойств объекта остается возможным
let customer = {
    customerName: "Nokia", 
}

let seller = customer;

console.log(customer);
console.log(seller);

seller.customerName = "Tesla";
console.log(customer);
console.log(seller);


console.log("-----------------delete object-----------------");
//удаляются не объекты, а ссылки на них, 
// а потом зборщик мусора удаляет объекты, т.к. на них тникто не ссылается

customer = null;
seller = null;
// теперь зборщик мусора видит, что на объект нет ссылок и удалит его