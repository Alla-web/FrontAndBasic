/*
Задание
Необходимо получить сумму двух чисел, введенных пользователем

Требования:

Запросите у пользователя два числа
Выполните сложение этих чисел
Результат сложения выведите в диалоговом окне
*/

let firstNumber = Number(prompt("Enter number"));
console.log(`firstNumber: ${firstNumber}`);

let secondNumber = Number(prompt("Enter number"));
console.log(`secondNumber: ${secondNumber}`);

let sum = firstNumber + secondNumber;
console.log(`sum (${firstNumber} + ${secondNumber}): ${sum}`);

alert(`sum (${firstNumber} + ${secondNumber}): ${sum}`);


