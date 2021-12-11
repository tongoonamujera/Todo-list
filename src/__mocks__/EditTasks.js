const editTask = (task, text) => {
  const tasks = [];
  tasks[0] = task;
  const temp = [];
  /* eslint-disable */
  for (const i in tasks) {
    tasks[i].description = text;
    temp.push(tasks[i]);
  }
  return temp;
};

export default editTask;