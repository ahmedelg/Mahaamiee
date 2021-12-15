const doneTasks = (() => { 
  // All done-tasks
  this.doneTasksStack = new Array();
  
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
    this.doneTasksStack.push({
      title: title,
      createdDate: createdDate,
      endDate: dateCmp.getCurrentDate()
    });
    // # Remove `options-box`
    removeTask(task);
  };
  // ---------------------------------------------------
  // # SetUp stack of `doneTasks-datastore`
  function DONE_TASKS_STACK () {
    let initDoneTasks = localStorage.getItem("doneTasksStack");
    if (initDoneTasks) {
      // .>> `founded` : `created`
      return JSON.parse(initDoneTasks);
    } else {
      // .>> `not founded` : `not created`
      // # Create a `doneTasksStack-datastore`
      localStorage.setItem("doneTasksStack", JSON.stringify([]));
      // # Get `doneTasksStack-datestore`
      return JSON.parse(localStorage.getItem("doneTasksStack"));
    };
  };
  // ---------------------------------------------------
  // # Get all `done-tasks-stack`
  const getDoneTasksStack = () => this.doneTasksStack;
  // ---------------------------------------------------
  // # Store `done-tasks-stack`
  const storeDoneTasks = () => {
    // [+1] Init `DONE_TASKS_STACK` datastore
    let doneTasksStack = DONE_TASKS_STACK();
    // [+2] Add new `done-tasks`
    const NEW_DONE_TASKS = this.doneTasksStack.forEach(doneTask => {
      doneTasksStack.push(doneTask);
    });
    // [+3] Store
    localStorage.setItem("doneTasksStack", JSON.stringify(doneTasksStack));
  };
  // ---------------------------------------------------
  return {
    doneTasks: this.doneTasksStack,
    add: add,
    DONE_TASKS_STACK: DONE_TASKS_STACK,
    storeDoneTasks: storeDoneTasks
  };
})();
// End!