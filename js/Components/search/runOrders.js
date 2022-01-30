let runOrder = (function () {
  // # Get all run orders
  let getAllRunOrders = () => document.querySelectorAll(".current-task");
  
  // # Get all tasks
  let displayAllRunTasks = () => {
    // # Get all tasks from workspace
    let allTasks = document.getElementsByClassName("task");
    for (let i = 0; i < allTasks.length; i++) {
      console.log(allTasks[i]);
      displayRunTasks(allTasks[i]);
    };
  };
  
  // # Views the run-tasks
  let displayRunTasks = (task) => {
    if (task.classList.contains("current-task")) {
      console.log("current-task");
      task.style.display = "block";
    } else {
      console.log("not current-task");
      task.style.display = "none";
    }
  };
  
  return {
    displayAllRunTasks: displayAllRunTasks
  };
})();
// End!