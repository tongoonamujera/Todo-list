import './style.css';
import './fontawesome/css/all.css';
import { createTodos } from './htmlDisplay.js';
import { TaskStorage } from './localStorage.js';

const todo = document.querySelector('.todo');

document.addEventListener('load', createTodos(todo));
document.querySelector('.todo').addEventListener('change', (e) => {
  const task = new TaskStorage();
  task.changeStatus(e);
});
