const delayTasks = (() => {
  // All `delayed-tasks`
  this.delayedTasksStack = new Array();
  // ---------------------------------------------------
  const add = p => {
    let {
      removeTask,
      getTask,
      TASK_INFO
    } = DB_LOG_Generals;
    let task = getTask(p);
    // # Get `info-about-task`
    const { title, createdDate } = TASK_INFO(task);
    this.delayedTasksStack.push({
      title: title,
      createdDate: createdDate,
      endDate: dateCmp.getCurrentDate()
    });
    // # Remove `options-box`
    removeTask(task);
  };
  // ---------------------------------------------------
  // # SetUp stack of `doneTasks-datastore`
  function DELAYED_TASKS_STACK() {
    let initDelayedTasks = localStorage.getItem("delayedTasksStack");
    if (initDelayedTasks) {
      // .>> `founded` : `created`
      // .>> return `delayed-tasks`
      return JSON.parse(initDelayedTasks);
    } else {
      // .>> `not founded` : `not created`
      // # Create a `delayedTasksStack-datastore`
      localStorage.setItem("delayedTasksStack", JSON.stringify([]));
      // # Get `delayTasksStack-datestore`
      return JSON.parse(localStorage.getItem("delayedTasksStack"));
    };
  };
  // ---------------------------------------------------
  // # Get all `done-tasks-stack`
  const getDelayedTasksStack = () => this.delayedTasksStack;
  // ---------------------------------------------------
  // # Store `done-tasks-stack`
  const storeDelayedTasks = () => {
    // [+1] Init `DELAYED_TASKS_STACK` datastore
    let delayedTasksStack = DELAYED_TASKS_STACK();
    // [+2] Add new `delayed-tasks`
    const NEW_DONE_TASKS = this.delayedTasksStack.forEach(delayedTask => {
      delayedTasksStack.push(delayedTask);
    });
    // [+3] Store
    localStorage.setItem("delayedTasksStack", JSON.stringify(delayedTasksStack));
  };
  // ---------------------------------------------------
  return {
    delayedTasksStack: this.delayedTasksStack,
    add: add,
    DELAYED_TASKS_STACK: DELAYED_TASKS_STACK,
    storeDelayedTasks: storeDelayedTasks
  };
})();
// End!