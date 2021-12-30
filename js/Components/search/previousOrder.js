let previousOrder = () => {
  // # Previous tasks
  // let previousTasks = new Array();
  
  // # Display all previous tasks
  let displayAllPreviousTasks = () => {
    // # Get the current date
    let currDate = dateCmp.getCurrentDate();
    
    // # Get all tasks from workspace
    let allTasks = Helpers().getAllTasks;
    
    // # Check each task is previous or not?
    for (let i = 0; i < allTasks.length; i++) {
      // console.log(allTasks[i]);
      if (Helpers().getCreatedDate(allTasks[i]) === currDate) {
        // ? Not previous
        // # Hide task
        allTasks[i].style.display = "none";
      }else {
        // ? Previous
        // # Show task
        allTasks[i].style.display = "block";
      }
    };
  };
  

  
  
  
  return {
    displayAllPreviousTasks: displayAllPreviousTasks(),
  
  };
};
// End!