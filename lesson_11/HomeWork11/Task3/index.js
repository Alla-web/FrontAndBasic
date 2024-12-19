/*
Задача 3*
Создайте пустой массив countdown. 
С помощью цикла for заполните массив числами от 10 до 1. 
После завершения цикла удалите первое число массива. Выведите итоговый массив.
*/

let countdown = [];

for (let i = 10; i >= 1; i--) {
    countdown.push(i); 
}

console.log(countdown);

countdown.shift();
console.log(countdown);

for (const element of object) {
    
}
