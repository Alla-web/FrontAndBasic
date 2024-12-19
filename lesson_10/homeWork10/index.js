/*
Задача 1
Напишите программу, которая запрашивает у пользователя число (через prompt) 
и выводит сообщение "Число находится в диапазоне от 10 до 20" если число 
находится в этом диапазоне, иначе выводит "<введенное число или значение> 
не входит в указанный диапазон".

Примечание: Эта запись - <введенное число или значение>, означает, 
что сюда нужно подставить то, что пользователь вввёл и без треугольных скобок
*/

let number = Number(prompt("Enter number"));

if (number >= 10 && number <= 20) {
    alert(`The number ${number} ranges from 10 to 20`);
} else {
    alert(`Entered number or value ${number} not within the range from 10 to 20`);
    prompt("Enter number one more time");
}

/*
Задача 2
Напишите программу, которая запрашивает у пользователя два числа (через prompt). 
Если оба числа положительные и нечетные, программа выводит сообщение 
"Оба числа положительные и нечетные", иначе выводит "Хотя бы одно число не соответствует условию"

Важно: задание нужно прислать мне в виде архива с index.js и index.html файлами
*/

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));

if (
  firstNumber > 0 &&
  firstNumber % 2 === 0 &&
  secondNumber > 0 &&
  secondNumber % 2 === 0
) {
  alert(
    `Both numbers - ${firstNumber}, ${secondNumber} - are positive and even`
  );
} else {
  alert(
    `At least one number: ${firstNumber}, ${secondNumber} - isn't positive or even`
  );
}
