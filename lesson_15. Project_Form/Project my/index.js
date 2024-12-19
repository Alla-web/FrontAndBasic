/*
Задание
Сверстать страницу по дизайну:ссылка на дизайн
Когда загружается приложение, видна только форма
Когда пользователь вводит данные во все инпуты и нажимает на кнопку "Создать", 
появляется карточка с данными пользователя, которые он ввел в форме (см. дизайн)
Если пользователь не ввел данные хотя бы в одном обязательном инпуте, то карточка 
не показывается или не обновляется (если была показана ранее) и должен появиться 
alert с сообщением: "Введите информацию во все обязательные поля"
Важно: задание нужно прислать мне в виде архива, в котором будут три файла: index.js, index.html, styles.css

при заполнение формы (первые 3 строки обязательны к заполнению) 
все данные переносятся в информационную карточку работника
*/

//выбираем элементы, с которыми далее будем работать
const form = document.getElementById("formEmployee");
const card = document.getElementById("cardEmployee");

const emplName = document.getElementById("employeeName");
const emplSurname = document.getElementById("employeeSurname");
const emplAge = document.getElementById("employeeAge");
const emplPosition = document.getElementById("employeePosition");

//прописываем логику - функцию, которая будет вытаскивать данные из формы
//и записывать их в карточку работника

const getEmployeeInfo = (event) => {
  //очищаем стандартное поведение действия submit
  event.preventDefault(); // делается только при event - submit

  //получаем данные из формы
  const name = form.name.value.trim();
  const surname = form.surname.value.trim();
  const age = form.age.value.trim();
  const position = form.position.value.trim();

  if (name !== "" && surname !== "" && age !== "") {
    emplName.textContent = name;
    emplSurname.textContent = surname;
    emplAge.textContent = age;
    emplPosition.textContent = position;
    card.style.visibility = "visible";
  } else {
    alert("Fill out first three required filds!");
  }
};

//привязываем обработчик события к элементу form
form.addEventListener("submit", getEmployeeInfo);
