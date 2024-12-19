console.log("-----------------------асинхронность----------------------");
console.log("----------setTimeout() не блокирует остальной код-----------");

const showMessage = () => {
  console.log("Функция выполнится позже");
};
setTimeout(showMessage, 3000); //1000 ms = 1 секунда

console.log("-----передача в setTimeout() функции с аргументами-------");
const greet = (name, age, isAdmin) => {
  console.log(`Hello, ${name} - ${age} - Admin: ${isAdmin}`);
};
setTimeout(greet, 2000, "Alla", 40, "Yes"); // если не задать аргумент то будет в выдаче undefined

console.log("----------setTimeout(), setInterval(), clearInterval()--------");
//создаём счётчик до 10
const simpleCounter = () => {
  //создаём переменную, которая будет в себе хранить значение счётчика
  let count = 1; // в ms

  //создаём функцию, которая будет выводить значение счётчика в консоль и изменять его на 1
  const countFunc = () => {
    console.log(count);
    count++;
  };

  //запускаем выполнение функции countFunc с интервалом 1 секунда (1000 мс)
  const intervalID = setInterval(countFunc, 1000);

  //делаем очистку интервала через 10 секунд
  //()=> clearInterval() - эта обёртка нужна, чтобы функция clearInterval вызвалась через 1000мс, а не сразу
  setTimeout(() => clearInterval(intervalID), 11000);
};

simpleCounter();

console.log("-------------------------promises-------------------------");
//ассинхронность - когда несколько функций/методов срабатывают не друг за другом, а паралельно
// 3 СОСТОЯНИЯ промиса:
pending //ожидание ответа (статус undefined)
resolved //успешный ответ (приходит объект с запрашиваемыми данными)
rejected //негативный ответ (приходит объект с ошибкой)

const myPromise = new Promise((resolve, reject) => {
  //пример ожидаемых данных
  //   const result = {
  //     status: "200",
  //     data: {
  //       name: "Bob",
  //       age: 43,
  //     },
  //   };

  //пример ошибки
  const result = {
    status: "500",
    message: "Server error",
  };

  setTimeout(() => {
    if (result.status === "200") {
      resolve(result.data);
    } else {
      reject(result.message);
    }
  }, 3000);
});

// console.log(myPromise); //возвращение результата

//обработка результата Promise, с помощью встроенных обработчиков:
//  then (если успешный результат),
// cath (если ошибка),
// finaly (выполнится в любом случае, для удаления спиннера со страницы)
//обработчики прописываеются по цепочке, т.к. мы не знаем какой результат будет у нашего Promise
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("end");
  });

//симуляция отправки запроса на сервер и обработка результата
const dataContainer = document.querySelector(".data-container");
const loading = document.getElementById("load-ind");
const getDataButton = document.querySelector("#request-button");

//создаём функцию, которая симулирует отправку запроса на червер и возвращает пропис
const customFetch = () => {
  const promise = new Promise((resolve, reject) => {
    // пример ожидаемых данных
    const result = {
      status: "200",
      data: {
        firstName: "John",
        lastName: "Johnson",
        age: 34,
      },
    };

    //пример ошибки
    // const result = {
    //   status: "500",
    //   message: "Server error",
    // };

    setTimeout(() => {
      if (result.status === "200") {
        resolve(result.data);
      } else {
        reject(result.message);
      }
    }, 3000);
  });

  return promise;
};

//функция для отправки запроса и обработки результата
const getData = () => {
  dataContainer.innerHTML = "";
  dataContainer.style.color = "white";
  loading.removeAttribute("class");

  customFetch()
    .then((data) => {
      dataContainer.innerHTML = `
       <h2>User Data</h2>
       <div>Name: ${data.firstName}</div>
       <div>Surname: ${data.lastName}</div>
       <div>Age: ${data.age}</div>
      `;
    })
    .catch((error) => {
      dataContainer.style.color = "red";
      dataContainer.textContent = error;
    })
    .finally(() => {
      loading.setAttribute("class", "hidden");
    });
};

getDataButton.addEventListener("click", getData);
