import './style.css';
import './fontawesome/css/all.css';
import { createTodos } from './htmlDisplay';
import { TaskStorage } from './localStorage';

const todo = document.querySelector('.todo');

document.addEventListener('load', createTodos(todo));
document.querySelector('.todo').addEventListener('change', (e) => {
  const task = new TaskStorage();
  task.changeStatus(e);
});
