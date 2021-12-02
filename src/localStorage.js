const tasks = [
  {
    description: 'first task',
    completed: false,
    index: 1,
  },
  {
    description: 'second task',
    completed: false,
    index: 2,
  },
  {
    description: 'third task',
    completed: false,
    index: 3,
  },
  {
    description: 'fourth task',
    completed: false,
    index: 4,
  },
];

/* eslint-disable */
export class TaskStorage {
  constructor(){};
  getTask = () => {
    let allTasks;
    if (localStorage.getItem('alltasks') !== null) {
      allTasks = JSON.parse(localStorage.getItem('alltasks'));
    }else{
      allTasks = [...tasks];
      localStorage.setItem('alltasks', JSON.stringify(allTasks));
    }
    return allTasks;
  }

  addTask = (task) => {
    const allTasks = this.getTask();
    allTasks.push(task);
    localStorage.setItem('alltasks', JSON.stringify(allTasks));
  }

  changeStatus = (e) => {
    const allTasks = this.getTask();
    const form = e.target.checked;
    const value = e.target.value - 1;

    form ? allTasks[value].completed = 'true' : allTasks[value].completed = 'false';
    localStorage.setItem('alltasks', JSON.stringify(allTasks));
  }
}
