//при подтверждении формы должна будет
// расчитана величина ежемесячной оплаты по кредиту

//выбираем элемент, с которым далее будем работать
const loanForm = document.getElementById("loanForm");
const resultDiv = document.getElementById("result");

//прописываем логику - создаем функцию для расчёта оплаты
const getAmount = (event) => {
  //привентируем поведение формы по умолчанию
  //при событии submit (наши данные не пропадают из формы)
  event.preventDefault();

  //получаем значения из полей формы
  // и преоразовуем сразу из строки в число
  const loanAmount = Number(loanForm.loanAmount.value);
  const interestRate = Number(loanForm.interestRate.value) / 100 / 12;
  const loanTerm = Number(loanForm.loanTerm.value) * 12;

  //рассчитываем месячный платёж по кредиту
  const monthPayment =
    (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

  resultDiv.innerHTML = `<p>Your montly paymant: ${monthPayment.toFixed(
    2
  )}$ </p>`;

  resultDiv.setAttribute("class", "result-style");

  // resultDiv.style.background = "#3d1df5";
  // resultDiv.style.display = "flex";
  // resultDiv.style.justifyContent = "center";
  // resultDiv.style.alignItems = "center";
  // resultDiv.style.borderRadius = "8px";
  // resultDiv.style.width = "330px";
  // resultDiv.style.height = "30px";
};

//привязываем функцию к обработчику события submit

//Основные правила при работе с событием submit:
//1) вызов метода addEventListener() делаем для элемента form
//2) внутри form должна быть кнопка с типом submit
loanForm.addEventListener("submit", getAmount);
