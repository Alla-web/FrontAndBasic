/*
Задание
Вы получили массив с ценами на товар (создайте переменную, в которой будет храниться массив). 
Значения массива [100, 400, 900, 300, 500].
Необходимо отобразить каждый из элементов массива на странице в отдельном блоке
Стилизация на ваше усмотрение
Дополнительная задача *: Создайте кнопку "Filter", при нажатии на которую на странице 
будут отображаться только блоки с ценами > 450
*/

const prices = [100, 400, 900, 300, 500];

const jacketPrice = document.querySelector(".jacketPrice");
const jeansPrice = document.querySelector(".jeansPrice");
const skirtPrice = document.querySelector(".skirtPrice");
const shirtPrice = document.querySelector(".shirtPrice");
const trousersPrice = document.querySelector(".trousersPrice");

let itemsPrices = [
  jacketPrice,
  jeansPrice,
  skirtPrice,
  shirtPrice,
  trousersPrice,
];
const renderPrice = (inputArray) => {  

  inputArray.forEach((price, index) => {
    itemsPrices[index].textContent = ""; 
    console.log(price);
    itemsPrices[index].textContent = price;
  });
};
renderPrice(prices);

/*----------------filtered------------------------------------------*/

const itemContainerList = document.querySelectorAll(".item-container");
const filterButton = document.querySelector("#filterButton");

const filteredPrices = () => {
  const filteredPrices = prices.filter((price) => price >= 450);
  renderPrice(filteredPrices);
};

filterButton.addEventListener("click", filteredPrices);
