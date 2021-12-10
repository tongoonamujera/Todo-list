const editTask = (task, text) => {
  const tasks = [];
  tasks[0] = task;
  const temp = []
  for (let i in tasks){
    tasks[i].description = text;
    temp.push(tasks[i])
  }
  return temp;
}

export default editTask;