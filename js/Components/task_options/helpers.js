const OptionsHelpers = (() => {
  // # Get task
  const getTask = (p) =>
    p.parentElement.parentElement.parentElement.parentElement;

  const getTaskOptions = (p) => p.parentElement.parentElement;

  // get task from taskOptionsCntr
  const TASK_FROM_OPTIONS_CNTR = (TaskOption) =>
    getTaskOptions(TaskOption).parentElement.parentElement;

  const removeOptions = (p) => getTaskOptions(p).remove();

  const isTaskCurrent = (task) => task.classList.contains("current-task");

  const toggleCurrentState = (p, task) => {
    // [+1] Get task
    let selectedTask = task;
    if (!task) selectedTask = getTask(p);
    // [+2] Check `current-state` of task?
    if (isTaskCurrent(selectedTask)) {
      // ? Current
      // .>> remove `current-state`
      selectedTask.classList.remove("current-task");
    } else {
      // ? Not current
      // .>> add `current-state`
      selectedTask.classList.add("current-task");
    }
  };

  const ALL_TASKS = () => document.querySelectorAll(".task");
  
  return {
    getTask: getTask,
    removeOptions: removeOptions,
    toggleCurrentState: toggleCurrentState,
    getTaskOptions: getTaskOptions,
    TASK_FROM_OPTIONS_CNTR: TASK_FROM_OPTIONS_CNTR,
    ALL_TASKS:ALL_TASKS()
  };
})();
// End!
