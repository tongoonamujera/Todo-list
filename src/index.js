import './style.css';
import './fontawesome/css/all.css';
import { createTodos } from './htmlDisplay.js';
import { TaskStorage } from './localStorage.js';

document.querySelector('.form-btn').addEventListener('click', (e) => {
  const textField = document.querySelector('input[type="text"]');
  const tasks = {
  description: textField.value,
  completed: false,
  index: 0,
  }
  const task = new TaskStorage();
  if (tasks.description) {
  task.addTask(tasks)
  }
  console.log(textField.value)
  e.preventDefault();
});
const todo = document.querySelector('.tasks-div');

document.addEventListener('load', createTodos(todo));
document.querySelector('.todo').addEventListener('change', (e) => {
  const task = new TaskStorage();
  task.changeStatus(e);
});

document.querySelector('.todo').addEventListener('keyup', (e) => {
  const task = new TaskStorage();
  if (e.keyCode == 13){
    task.editTask(e);
    location.reload();
  }
});

document.querySelector('.delete-btn').addEventListener('click', () => {
  const task = new TaskStorage();
  task.removeTasks();
  location.reload();
});
