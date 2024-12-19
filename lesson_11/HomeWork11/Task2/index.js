/*
Задача 2
Создайте пустой массив shoppingList. 
Запросите у пользователя три товара (три запроса, по одному на каждый товар) 
и добавьте их в конец массива. Выведите итоговый список товаров.
*/

let shoppingList = [];

for (let i = 0; i <= 3; i++) {
    shoppingList.push(prompt(`Enter item №${i}`));    
}

alert(`Your shopping list: ${shoppingList}`);


