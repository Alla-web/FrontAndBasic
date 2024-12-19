"https://catfact.ninja/fact";

//выборка элементов для последующей работы
const getCatFactsButton = document.getElementById("get-cats-fact");
const dataContainer = document.querySelector(".data-container");
const loadind = document.getElementById("load-ind");

//функция, в которой будет прописана логика отправки запроса
//и обработки результата
const getCatFacts = async () => {
  try {
    //очищения элементов перед отправкой запроса
    getCatFactsButton.setAttribute("disabled", "");   
    dataContainer.textContent = "";
    loadind.removeAttribute("class");
    //удаляем дополнительный класс (выделение ошибки красным)
    dataContainer.classList.remove("error");


    //отправка запроса, ожидание завершения промиса, который возвращает fetch
    // и сохранение результата в переменную response
    const response = await fetch("https://catfact.ninja/fact");
    console.log(response);
    //используем метод json(асинхронный) объекта response для получения данных в необъодимом формате
    const result = await response.json();
    console.log(result);

    //если свойство ok true, тогда обрабатываем данные успешного результата
    //если свойство ok false, тогда создаём исключение для перехода в блок catch

    if (response.ok) {
      dataContainer.textContent = `Fact: ${result.fact}`;
      getCatFactsButton.removeAttribute("disabled");
    } else {
      //генерирум исключение
      //класически в объекте result будут храниться характеристики ошибки в виде {messege: `Not found`, code `404`}
      //самостоятельно создаём исключение, т.к. promice,
      // который возвращает fetch не возвращается как rejected в случае ошибок 400-599
      throw new Error(result.message);    
    }
  } catch (error) {
    console.log(error);
    //в свойстве message ошибки будет храниться сообщение, которое мы передавали в сообщение
    dataContainer.textContent = `Error: ${error.message}`;
    //если появится ошибка - она будет подсвечиваться корасным
    dataContainer.classList.add("error");
  } finally {
    loadind.setAttribute("class", "hidden");
  }
};

//перегруз сервера - часто отправляем запросы
// setInterval(getCatFacts, 10); 


getCatFactsButton.addEventListener("click", getCatFacts);

