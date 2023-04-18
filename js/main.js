// находим элементы на странице
const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector('#tasksList');

form.addEventListener("submit", function (event) {
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
  tasksList.insertAdjacentHTML('beforeend', taskHTML);
});