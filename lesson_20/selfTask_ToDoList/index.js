const INPUT = document.getElementById("task-input");
const ADD_BUTTON = document.getElementById("add-button");
const BACKSPACE_BUTTON = document.getElementById("backspace-button");
const LIST_CONTAINER = document.querySelector(".list-container");

BACKSPACE_BUTTON.addEventListener("click", () => {
  LIST_CONTAINER.innerHTML = "";
});

const addTask = () => {
  if (INPUT) {
    // создаём контейнер с задачей и кнопкой УДАЛИТЬ ЗАДАЧУ
    let taskContainer = document.createElement("div");
    taskContainer.className = "list-item";   

    //создаём текст задачи в контейнере с задачей и очищаем инпут
    let taskText = document.createElement("p");
    taskText.textContent = INPUT.value.trim();
    INPUT.value = "";

    //создаём и наполняем кнопку УДАЛИТЬ ЗАДАЧУ
    let deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("delete-button");
    deleteTaskButton.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    deleteTaskButton.addEventListener("click", () => {
      taskContainer.remove();
    });

    //добавляем текст задачи и кнопку удаления в контеней списка
    taskContainer.append(taskText);
    taskContainer.append(deleteTaskButton);
    LIST_CONTAINER.append(taskContainer);
  }
};

ADD_BUTTON.addEventListener("click", addTask);
