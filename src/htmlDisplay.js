import { TaskStorage } from './localStorage.js';
/* eslint-disable */
export const createTodos = (todoList) => {
  const task = new TaskStorage();
  const taskss = task.getTask();
  const todoDiv = document.createElement('div');
  todoDiv.classList = 'todo-body';

  const ceck = [];
  const other = [];
  taskss.forEach((task) => {
    task.completed ? ceck.push(task): other.push(task);
    todoDiv.innerHTML += `
      <div class='d-todo'>
      ${ task.completed != 'true' ? `<input type="checkbox" value="${task.index}" />` : `<input type="checkbox" value="${task.index}" checked />` }
        <p>${task.description}</p>
        <section><i class='fas fa-ellipsis-v'></i></section>
      </div>
    `;
  });

  console.log('other', other);
  console.log('compltede', ceck);

  todoList.appendChild(todoDiv);

  const deleteBtn = document.createElement('div');
  todoList.appendChild(deleteBtn);
  deleteBtn.innerHTML += `
    <input type='submit' value='Clear all completed' />
  `;
};