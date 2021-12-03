import { TaskStorage } from './localStorage.js';
/* eslint-disable */
export const createTodos = () => {
  const task = new TaskStorage();
  const taskss = task.getTask();
  const todo = document.querySelector('.tasks-div');
  [...taskss]
  .forEach((task, index) => {
    console.log(index);
    let todoDiv = document.createElement('div');
    todoDiv.classList = 'todo-body';
    todoDiv.innerHTML = `
      <div class='d-todo' draggable="true">
      ${ task.completed != true ? `<input type="checkbox" value="${index}" />` : `<input type="checkbox" value="${index}" checked />` }
        <p contentEditable="true" data-id="${index}">${task.description}</p>
        <section><i class='far fa-trash-alt fa-2x' data-id="${index}"></i></section>
      </div>
    `;

    todo.appendChild(todoDiv);
  });

  console.log([...task.getTask()]);
};