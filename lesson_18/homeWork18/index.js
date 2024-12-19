/*
Разработать мини-приложение для получения случайных шуток
Требования:
Нужно создать кнопку "Get Joke", при клике на которую, будет выполняться GET запрос(используйте fetch). 
В ответе на запрос будет приходить случайная шутка
url: https://official-joke-api.appspot.com/random_joke
После того как вы получите успешный ответ, разместите шутку на странице
Если запрос завершиться ошибкой, её нужно разместить на странице и выделить красным цветом
Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новая шутка
Во время запроса кнопка должна быть заблокирована
Стилизуйте на ваше усмотрение
 */

//выбираем данные для последующей работы
const jokeContainer = document.querySelector(".joke-container");
const loading = document.getElementById("loading");
const getJokeButton = document.getElementById("get-joke");

const getJoke = async () => {
  //очистки элементов перед отправкой второго и более запроса
  getJokeButton.setAttribute("disabled", "");
  jokeContainer.textContent = "";
  loading.removeAttribute("class");
  //удаляем дополнительный класс (выделение ошибки красным)
  jokeContainer.classList.remove("error");
  
  try {
    //отправка запроса, ожидание завершения промиса, который возвращает fetch
    // и сохранение результата в переменную response
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);

    //используем метод json(асинхронный) объекта response для получения данных в необъодимом формате
    const result = await response.json();
    console.log(result);

    //если свойство ok true, тогда обрабатываем данные успешного результата
    //если свойство ok false, тогда создаём исключение для перехода в блок catch
    if (response.ok) {
      //сценарий при статусе Promice resolved (получили данные и обрабатываем их)
      //   jokeContainer.textContent = `Joke: ${result.setup}. \n Answer: ${result.punchline}`;
      jokeContainer.innerHTML = `
      <div>${result.setup}</div>
      <div>${result.punchline}</div>
      `;
      getJokeButton.removeAttribute("disabled"); //разблокируем кнопку для повторного использования
    } else {
      //генерирум исключение
      //класически в объекте result будут храниться характеристики ошибки в виде {messege: `Not found`, code `404`}
      //самостоятельно создаём исключение, т.к. promice, который возвращает fetch
      //не возвращается как rejected в случае ошибок 400-599
      throw new Error(result.message);
    }
  } catch (error) {
    //сценарий при статусе Promice rejected (обработка ошибки)
    jokeContainer.textContent = `Error: ${error.message}`;
    //если появится ошибка - она будет подсвечиваться корасным
    jokeContainer.classList.add("error");
  } finally {
    loading.setAttribute("class", "hidden");
  }
};

getJokeButton.addEventListener("click", getJoke);
