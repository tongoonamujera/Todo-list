import { TaskStorage } from './localStorage.js';
/* eslint-disable */
export const createTodos = (todoList) => {
  const task = new TaskStorage();
  const taskss = task.getTask();
  const todoDiv = document.createElement('div');
  todoDiv.classList = 'todo-body';

  const ceck = [];
  const other = [];
  [...taskss].forEach((task, index) => {
    task.completed ? ceck.push(task): other.push(task);
    todoDiv.innerHTML += `
      <div class='d-todo' draggable="true">
      ${ task.completed != true ? `<input type="checkbox" value="${index}" />` : `<input type="checkbox" value="${index}" checked />` }
        <p contentEditable="true" data-id="${index}">${task.description}</p>
        <section><i class='fas fa-ellipsis-v'></i></section>
      </div>
    `;

    todoList.appendChild(todoDiv);
  });

  console.log('other', other);
  console.log('compltede', ceck);
};