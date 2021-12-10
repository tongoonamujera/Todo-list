const changeStatus = (task) => {
  /* eslint-disable */
  if (task.completed){
    task.completed = false;
    return task;
  } else {
    task.completed = true;
    return task;
  }
};

export default changeStatus;
