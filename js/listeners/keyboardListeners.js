// KEYWORDs LISTENERs...
document.addEventListener('keydown', (event) => {
  // console.log(event.key);
  // CNTRL + A .. ADD NEW TASK
  if (event.key == "Enter") {
    event.preventDefault();
    switch (enterRun) {
      case "task-created":
        createTaskBtn.click();
        break;
      case "group":
        // Handle group
        group.addTaskInGroup(event.target.value);
      default:
        break;
    };
    // # Delete specified-task
    // console.log(event.key); // Enter
  // } else if (event.key === 'Delete') {
  //   // Remove All Selected Tasks
  //   deletesSelectedTasks(tasksTBeDelete);
  //   // Save current tasks
  } else if (event.ctrlKey && event.key == 's') {
    event.preventDefault();
    // # Save simple tasks
    // .>> Pass all determined tasks & save simple tasks
    saveDeterminedTasks(getAllTasksInfo(getAllExitedTasks()));
    
    // # Save uregent tasks
    saveUrgentTasks(getAllTasksInfo(getAllUrgentTasks()));

    // # Save `runtime-groups`
    group.saveRuntimeGroups();
    
    // # Save all `done-tasks`
    doneTasks.storeDoneTasks();
    
    // # Save all `delayed-tasks`
    delayTasks.storeDelayedTasks();
    
    // # Display articles-app
  } else if (event.shiftKey && event.key == 'R') { 
    openArticlesApp();
  }
});
