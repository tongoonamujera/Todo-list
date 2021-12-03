const task = JSON.parse(localStorage.getItem('alltasks'));

const tasksi = [];

for (let i in task ) {
  task[i].index = i;
  tasksi.push(task[i])
}

/* eslint-disable */
export class TaskStorage {
  constructor(){};
  getTask = () => {
    let allTasks;
    if (localStorage.getItem('alltasks') !== null) {
      allTasks = tasksi;
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

  removeTasks = () => {
    const allTasks = this.getTask();
    const tasks = allTasks.filter((task) => {
      return task.completed != true;
    });

    console.log(tasksi);

    localStorage.setItem('alltasks',JSON.stringify(tasks));
  }

  deleteTask = (e) => {
    const allTasks = this.getTask();
    const tasks = allTasks.filter((task) => {
      return task.index != +e.target.value;
    });
    console.log(tasks);
  }

  editTask = (e) => {
    const p = e.target.tagName;
    if (p === "P") {
      const text = e.target.innerText;
      const index = +e.target.dataset.id;
      const allTasks = this.getTask();
      const temp = [];
      for (let i in allTasks) {
        if (i == index) {
          allTasks[index].description = text;
        }
        temp.push(allTasks[i]);
      }
      localStorage.setItem('alltasks',JSON.stringify(temp));
      console.log(temp);
    }
  }
}
