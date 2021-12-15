const DB_LOG_Generals = (() => {
  const getTask = p => p.parentElement.parentElement.parentElement.parentElement;
  // ---------------------------------------------------------------------------
  // # Get `task's title`
  const TASK_TITLE = (task) => task.querySelector(".task-name-sec").textContent;
  // ---------------------------------------------------------------------------
  // # Get `Task's-created-date`
  const TASK_CREATED_DATE = (task) => task.querySelector(".build-date").textContent;
  // ---------------------------------------------------------------------------
  // # Get `task-info`
  const TASK_INFO = task => ({
    title: TASK_TITLE(task),
    createdDate: TASK_CREATED_DATE(task)
  });
  // ---------------------------------------------------------------------------
  const getOptionsContainer = p => p.parentElement.parentElement;
  // ---------------------------------------------------------------------------
  const removeOptionsContainer = p => getOptionsContainer(p).remove();
  // ---------------------------------------------------------------------------
  const removeTask = task => task.remove();
  // ---------------------------------------------------------------------------

  return {
    getTask: getTask,
    TASK_INFO: TASK_INFO,
    removeTask: removeTask
  };
})();