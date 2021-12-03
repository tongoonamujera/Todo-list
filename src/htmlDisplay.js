import { TaskStorage } from './localStorage.js';
/* eslint-disable */
export const createTodos = (todoList) => {
  const task = new TaskStorage();
  const taskss = task.getTask();
  const ceck = [];
  const other = [];
  if (taskss){
  [...taskss]
  .forEach((task, index) => {
    let todoDiv = document.createElement('div');
    todoDiv.classList = 'todo-body';
    todoDiv.innerHTML = `
      <div class='d-todo' draggable="true">
      ${ task.completed != true ? `<input type="checkbox" value="${index}" />` : `<input type="checkbox" value="${index}" checked />` }
        <p contentEditable="true" data-id="${index}">${task.description}</p>
        <section><i class='far fa-trash-alt fa-2x' data-id="${index}"></i></section>
      </div>
    `;

    todoList.appendChild(todoDiv);
  });
}

  console.log([...task.getTask()]);
};