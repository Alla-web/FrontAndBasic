//выбираем данные с которыми будем работать
const cityInput = document.getElementById("city-input");
const getWeatherButton = document.querySelector(".get-weather-button");
const weatherForecast = document.querySelector(".weather-forecast");
const loading = document.getElementById("loading");
const cityPhoto = document.querySelector(".city-photo");
const resultContainer = document.querySelector(".result-container");


const getCityWeatherForecast = async () => {
  //формируем переменные для отправки запроса
  //получаем значения ввода города
  const city = cityInput.value.trim();

  //сайт погоды
  let weatherApiKey = "1fe33819afaa1c454df3c8c26b932af5";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;

  //сайт unsplash
  let unsplashApiKey = "V_W89UyOGWpd7PO_2PBiNROFcVJyowoPLbaOSeIaQ8s";
  const unsplashUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashApiKey}`;

  if (city === "") {
    alert(`Please, enter city`);
    return;
  }

  try {
    //-------очищаем элемент после предшествующего вывода------
    getWeatherButton.setAttribute("disabled", "");
    weatherForecast.innerHTML = "";
    // weatherForecast.textContent = "";
    loading.removeAttribute("class");
    //удаляем дополнительный класс (выделение ошибки красным)
    weatherForecast.classList.remove("error");   
    //---------------------------------------------------------

    //отправка запроса, ожидание завершения промиса, который возвращает fetch
    //и сохранение результата в переменную response

    //получение погоды города
    const weatherResponse = await fetch(weatherUrl);
    console.log(weatherResponse);

    //если свойство ok true, тогда обрабатываем данные успешного результата
    //если свойство ok false, тогда создаём исключение для перехода в блок catch

    //обработка в случае ошибки вовзрата с сервера
    if (!weatherResponse.ok) {
      throw new Error(
        `${weatherResponse.status} ${weatherResponse.statusText}`
      );
    }

    //используем метод json(асинхронный) объекта response для получения данных в необъодимом формате
    const weatherResult = await weatherResponse.json();
    console.log(weatherResult);
    
    if (!weatherResult.main || !weatherResult.weather) {
      throw new Error(`Invalid response structure`);
    }

    //делаем пересчёты
    const temp = (weatherResult.main.temp - 273.15).toFixed(1);
    const realTemp = (weatherResult.main.feels_like - 273.15).toFixed(1);
    const windSpeed = (weatherResult.wind.speed * 3.6).toFixed(2);

    weatherForecast.innerHTML = `
        <div>City: ${weatherResult.name}</div>
        <div>Temperature: ${temp} °C</div>
        <div>Feels like: ${realTemp}°C</div>
        <div>Humidity: ${weatherResult.main.humidity}%</div>
        <div>Speed of wind: ${windSpeed} km/hour</div>
        <div>Description: ${weatherResult.weather[0].description}</div>
        <img src="https://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@2x.png" alt="Weather" width=50px>
        `;

    weatherForecast.classList.add("weather-forecast-changed");
    // weatherForecast.style.cssText = "background-color: orange; color: blue;";

    //получение фото города
    const unsplashResponce = await fetch(unsplashUrl);
    console.log(unsplashResponce);

    if (!unsplashResponce.ok) {
      throw new Error(
        `${unsplashResponce.status} ${unsplashResponce.statusText}`
      );
    }

    const unsplashResult = await unsplashResponce.json();
    console.log(unsplashResult);
    
    if (!unsplashResult.results) {
      throw new Error("Invalid response structure");      
    }
    
    //добавляем полученное фото 
    // cityPhoto.srс = unsplashResult.results[0].urls.regular;
    // console.log(unsplashResult.results[0].urls.regular);

    cityPhoto.classList.remove("hidden");
    cityPhoto.setAttribute("src", unsplashResult.results[0].urls.regular);
    cityPhoto.classList.add("city-photo");  

  } catch (error) {
    //сценарий при статусе Promice rejected (обработка ошибки)
    weatherForecast.textContent = `Error: ${error.message}`;
    //если появится ошибка - она будет подсвечиваться корасным
    weatherForecast.classList.add("error");
    weatherForecast.classList.add("weather-forecast-changed");
  } finally {
    loading.setAttribute("class", "hidden");
    getWeatherButton.removeAttribute("disabled");    
  }
};

getWeatherButton.addEventListener("click", getCityWeatherForecast);
