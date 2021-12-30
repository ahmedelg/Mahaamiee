let currentOrder = () => {
  // # Display current tasks
  let displayCurrentTasks = () => {
    // # Get current date
    let currDate = dateCmp.getCurrentDate();
    
    // # Get all task
    let allTasks = Helpers().getAllTasks;
    
    // # Check is current or not?
    for (let i = 0; i < allTasks.length; i++) {
      if (currDate !== Helpers().getCreatedDate(allTasks[i])) {
        // ? Not current -> Previous
        // # Hide all previous tasks
        console.log("Previous");
        allTasks[i].style.display = "none";
      }else {
        allTasks[i].style.display = "block";
      }
    };
  };
  
  return {
    displayCurrentTasks: displayCurrentTasks()
  };
};
//End!