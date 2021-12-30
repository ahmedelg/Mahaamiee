let dateOrder = (() => {
  // # Display tasks with specific date
  let displaySpecificDate = () => {
    // +1 Get value of task
    let taskValue = Helpers().taskValue;
    // +2 Get specific date
    // +3 Display all same date tasks
    getSameDateTasks(Helpers().getRestFOrder(taskValue))
      .forEach(task => {
        // # Show same date tasks
        task.style.display = "block";
      });
  };
  
  // # Display all same tasks' date
  let getSameDateTasks = specificDate => {
    // # Get all tasks from workspace
    let allTasks = Helpers().getAllTasks;
    // allTasks.
    let sameDateTasks = 
      [...allTasks]
      .filter(task => {
        if (Helpers().getCreatedDate(task) === specificDate) {
          return true;
        };
        // # Hide different date
        task.style.display = "none";
        return false;
      });
    return sameDateTasks;
  };
  
  
  return {
    displaySpecificDate: displaySpecificDate
  };
})();
// ENd!