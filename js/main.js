// находим элементы на странице
const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector("#tasksList");

// добавление задачи
form.addEventListener("submit", addTask);

// удаление задачи
tasksList.addEventListener('click', deleteTask)

// отметка о выполнении задачи
tasksList.addEventListener('click', doneTask)

// function declaration
function addTask(event) {
  // отмена отправки формы
  event.preventDefault();

  // достать текст из инпута
  const taskText = taskInput.value;

  // формируем размеку для новой задачи
  const taskHTML = `
    <li class="list-group-item d-flex justify-content-between task-item">
      <span class="task-title">${taskText}</span>
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
  if (event.target.dataset.action === 'delete') {
    // console.log('delete'); //проверка нажатия на Делит!
    const parenNode = event.target.closest('.list-group-item');
    parenNode.remove()
  }

  // проверка. отобразить пустой элемент Список Дел
  if (tasksList.children.length == 1) {
    emptyList.classList.remove('none');
  }
}

function doneTask (event) {
  // проверка клика по кнопке Выполнено
  if (event.target.dataset.action === 'done'){
    const parentNode = event.target.closest('.list-group-item');
    const taskTitle = parentNode.querySelector('.task-title');
    // добавление / удаление класса
    taskTitle.classList.toggle('task-title--done'); 
  }
}