/*
Задача 1
Напишите функцию, которая принимает строку и число n, в качестве параметров, 
а затем возвращает первые n символов строки. Для отображения результа работы функции, 
вызовите её три раза с различными аргументами, 
результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль
*/
// let subString1 = getSubstring("I like programming", 6);
// console.log(`subString1: ${subString1}`);

// function getSubstring(string, n) {
//    let result = string.substring(0, n);
//    return result;
// };

// let subString2 = getSubstring("Programming make me happy", 6);
// console.log(`subString1: ${subString2}`);

// let subString3 = getSubstring("JavaScript is wery interestin", 6);
// console.log(`subString1: ${subString3}`);

console.log("----------через стрелочную функцию-----------------");

let getSubstring = (string, n) => string.substring(0, n);

let substring1 = getSubstring("I like programming", 6);
let substring2 = getSubstring("Programming make me happy", 6);
let substring3 = getSubstring("JavaScript is wery interestin", 6);

console.log(`First sting: ${substring1}; second string: ${substring2}; third string: ${substring3}`);



/*
Задача 2*
У вас есть массив чисел [10, 15, 20, 25, 30]. 
Напишите функцию для вычисления среднего значения элементов массива 
(массив нужно передать через параметр) и вывода результата в консоль. 
Вызовите функцию для демонстрации результата
*/

let numberArr = [10, 15, 20, 25, 30];

function getAvarage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];        
    }

    console.log(sum);
    
    let avarage = sum / array.length;
    return avarage;
}

let avarageNumber = getAvarage(numberArr);
console.log(avarageNumber);








