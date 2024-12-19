/*
Задача 1
У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите цикл, 
в котором каждый элемент массива будет увеличиваться вдвое, 
результат каждой итерации выведите в консоль.
*/

let numbersArr = [2, 4, 6, 8, 10];

for (let i = 0; i < numbersArr.length; i++) {
    numbersArr[i] = numbersArr[i] * 2;
    //numbersArr[i] *= 2; - более короткая запись
    console.log(`numbersArr ${i}: ${numbersArr[i]}`);        
}



