/*
Общие требования:
Все лейблы находятся над полями
В соответствии с требованиями к полям, укажите валидацию с помощью атрибутов
Стилизуйте на своё усмотрения
формула расчета женского веса: height - 100 - (height - 150) / 2;
формула расчета мужского веса: height - 100 - (height - 150) / 4;
При клике на кнопку "Calculate", под кнопкой показывается сообщение "Your ideal weight is <результат>"
*/

//при нажатии на кнопку Calculate должен будет
//расчитан вес, в зависимости мужчина это или женщина

//выбираем элементы, с которыми далее будем работать
const idealWeightForm = document.getElementById("ideal-weight-form");
const resultDiv = document.querySelector(".result");

// прописываем логику - функцию для расчёта идеального веса
const getIdealWeight = (event) => {
  //привентируем поведение формы по умолчанию
  //при событии submit (наши данные не пропадают из формы)
  event.preventDefault();

  //получаем значения из полей формы
  // и преоразовуем сразу из строки в число
  let userHeight = Number(idealWeightForm.height.value); //обращаемся к атрибуту name input
  let userGender = idealWeightForm.gender.value; //обращаемся к атрибуту name input
  console.log(userHeight, userGender);
  

  //рассчитываем идеальный вес  
  let idealWeight;
  if (userGender === "male") { //обращаемся к атрибуту value select
    idealWeight = userHeight - 100 - (userHeight - 150) / 4;
  } else if (userGender === "female") { //обращаемся к атрибуту value select
    idealWeight = userHeight - 100 - (userHeight - 150) / 2;
  }

  // resultDiv.style.background = "#3d1df5";
  // resultDiv.style.color = "white";
  // resultDiv.style.display = "flex";
  // resultDiv.style.justifyContent = "center";
  // resultDiv.style.alignItems = "center";
  // resultDiv.style.borderRadius = "8px";
  // resultDiv.style.width = "350px";
  // resultDiv.style.height = "30px";

  //или добавить в CSS класс и потом его сюда добавить  
  resultDiv.innerHTML = `<p>Your ideal weight: ${Math.round(idealWeight)} kg </p>`;
  resultDiv.setAttribute("class", "result-style");
};

//привязываем функцию к обработчику события submit

//Основные правила при работе с событием submit:
//1) вызов метода addEventListener() делаем для элемента form
//2) внутри form должна быть кнопка с типом submit
idealWeightForm.addEventListener("submit", getIdealWeight);

