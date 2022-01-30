let Current = (() => {
  const runTask = (p) => {
    // event.stopPropagation();
    // [+1] Toggle `current-state` of task
    OptionsHelpers.toggleCurrentState(p);

    // [+3] Render with `current-tasks`
    // [+end] Handle enter
    enterRun = "task-created";

    // [+2] Track `user-action`
    const currentAction = {
      taskState: {
        element: OptionsHelpers.TASK_FROM_OPTIONS_CNTR(p),
      },
      actionState: {
        actionType: "current",
        actionDate: dateCmp.getCurrentDate(),
      },
    };
    userBehaviorHistory.storeNewAction(currentAction);
    // [+end] Remove `task-options`
    OptionsHelpers.removeOptions(p);
  };

  return {
    runTask: runTask,
  };
})();
// End!
