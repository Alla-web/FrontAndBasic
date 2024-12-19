/*
Задание
Создайте простой таймер на веб-странице, 
который будет отсчитывать время назад от 60 секунд. 
При достижении 0 секунд таймер должен остановиться.
*/

//отбираем данные, с которыми далее будем работать
const timer = document.querySelector(".timer");
const startButton = document.getElementById("startButton");

const showTimer = () => {
  //создаём переменную счётчик
  let count = 5;

  //создаём функцию, которая будет добавлять значение счётчика в DOM и изменять его на 1
  function updateTimer() {
    startButton.setAttribute("disabled", ""); //кнопка обездвижена, чтобы во время работы таймера нельзя было ее кликать 
    timer.textContent = count;

    if (count <= 0) {
      clearInterval(intervalID);
      startButton.removeAttribute("disabled");
    } else {
      count--;
    }
  }

  //запускаем выполнение функции countFunc с интервалом 1 секунда (1000 мс)
  const intervalID = setInterval(updateTimer, 1000);

  // //делаем очистку интервала через 10 секунд
  // setTimeout(()=> clearInterval(intervalID), 11000);
};

startButton.addEventListener("click", showTimer);
