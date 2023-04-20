// находим элементы на странице
const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector("#tasksList");

let tasks = []; // удал и добав задачи для сохран данных

form.addEventListener("submit", addTask);

tasksList.addEventListener('click', deleteTask)

tasksList.addEventListener('click', doneTask)

function addTask(event) {
  // отмена ресета страницы
  event.preventDefault();

  // достать текст из инпута
  const taskText = taskInput.value;

  // описываем задачу в виде обьекта
  const newTask = {
    id: Date.now(),
    text: taskText,
    done: false
  }
  // add task
  tasks.push(newTask);

  // формируем CSS class
  const cssClass = newTask.done ? "task-title task-title--done" : "task-title";

  // формируем размеку для новой задачи
  const taskHTML = `
    <li id="${newTask.id}" class="list-group-item d-flex justify-content-between task-item">
      <span class="${cssClass}">${newTask.text}</span>
      <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
          <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
        <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
      </div>
    </li>`;

  // Добавляем задачу на страницу
  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  // Очищаем поле ввода и сохраняем на него фокус
  taskInput.value = "";
  taskInput.focus();

  // Проверка, если список пополняется элементами, то строка "Список" скрывается
  if (tasksList.children.length > 1) {
    emptyList.classList.add("none");
  }
}

function deleteTask (event) {
  // проверка если клик не по кнопке Крестик
  if (event.target.dataset.action !== 'delete') return;

  const parenNode = event.target.closest('.list-group-item');
  parenNode.remove();

  // проверка. отобразить пустой элемент Список Дел
  if (tasksList.children.length == 1) {
    emptyList.classList.remove('none');
  }
}

function doneTask (event) {
  // проверка клика не по кнопке Галочка
  if (event.target.dataset.action !== 'done') return;

  const parentNode = event.target.closest('.list-group-item');
  const taskTitle = parentNode.querySelector('.task-title');
  // добавление / удаление класса
  taskTitle.classList.toggle('task-title--done'); 
} 