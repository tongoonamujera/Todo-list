const task = JSON.parse(localStorage.getItem('alltasks'));

const tasks = task.forEach((taskss, i) => {
  return taskss.index = i;
});

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
    const value = e.target.value;

    form ? allTasks[value].completed = true : allTasks[value].completed = false;
    localStorage.setItem('alltasks', JSON.stringify(allTasks));
  }

  removeTask = () => {
    const allTasks = this.getTask();
    const tasks = allTasks.filter((task) => {
      return task.completed != true;
    });

    console.log(tasks);

    localStorage.setItem('alltasks',JSON.stringify(tasks));
  }
}
