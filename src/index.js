import './style.css';
import './fontawesome/css/all.css';

const tasks = [
  {
    description: 'first task',
    completed: false,
    index: 1
  },
  {
    description: 'second task',
    completed: false,
    index: 2
  },
  {
    description: 'third task',
    completed: false,
    index: 3
  },
  {
    description: 'fourth task',
    completed: false,
    index: 4
  }
]

const todo = document.querySelector('.todo');


const createTodos = (todoList) => {
  tasks.forEach((task) => {
    todoList.innerHTML += `
      <div class='d-todo'>
        <input type='checkbox' />
        <p>${task.description}</p>
        <section><i class='fas fa-ellipsis-v'></i></section>
      </div>
    `
  });

  const deleteBtn = document.createElement('div');
  todoList.appendChild(deleteBtn);
  deleteBtn.innerHTML += `
    <input type='submit' value='Clear all completed' />
  `
}

window.addEventListener('load', createTodos(todo))
