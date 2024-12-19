//выбираем данные с которыми будем работать
const cityInput = document.getElementById("city-input");
const getWeatherButton = document.querySelector(".get-weather-button");
const weatherForecast = document.querySelector(".weather-forecast");
const loading = document.getElementById("loading");
console.log(cityInput, getWeatherButton, weatherForecast, loading);


const getCityWeatherForecast = async () => {
  try {
    //-------очищаем элемент после предшествующего вывода------
    getWeatherButton.setAttribute("disabled", "");
    weatherForecast.innerHTML = "";
    // weatherForecast.textContent = "";
    loading.removeAttribute("class");
    //удаляем дополнительный класс (выделение ошибки красным)
    weatherForecast.classList.remove("error");
    //---------------------------------------------------------

    //формируем переменные для отправки запроса
    //получаем значения ввода города
    const city = cityInput.value.trim();
    let apiKey = "1fe33819afaa1c454df3c8c26b932af5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    //отправка запроса, ожидание завершения промиса, который возвращает fetch
    //и сохранение результата в переменную response
    const response = await fetch(url);
    console.log(response);
    //используем метод json(асинхронный) объекта response для получения данных в необъодимом формате
    const result = await response.json();
    console.log(result);

    //если свойство ok true, тогда обрабатываем данные успешного результата
    //если свойство ok false, тогда создаём исключение для перехода в блок catch
    if (response.ok) {
      //делаем пересчёты
      const temp = (result.main.temp - 273.15).toFixed(1);
      const realTemp = (result.main.feels_like - 273.15).toFixed(1);
      const windSpeed = (result.wind.speed* 3.6).toFixed(2);      

      weatherForecast.innerHTML = `
        <div>City: ${result.name}</div>
        <div>Temperature: ${temp} °C</div>
        <div>Feels like: ${realTemp}°C</div>
        <div>Humidity: ${result.main.humidity}%</div>
        <div>Speed of wind: ${windSpeed} km/hour</div>
        <div>Description: ${result.weather[0].description}</div>
        <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="Weather">
        `;
      getWeatherButton.removeAttribute("disabled");
    }
  } catch (error) {
    //сценарий при статусе Promice rejected (обработка ошибки)
    weatherForecast.textContent = `Error: ${error.message}`;
    //если появится ошибка - она будет подсвечиваться корасным
    weatherForecast.classList.add("error");
  } finally {
      loading.setAttribute("class", "hidden");
  }
};

getWeatherButton.addEventListener("click", getCityWeatherForecast);
