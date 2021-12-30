let allOrder = () => {

  let displayAllTasks = () => {
    // # Get all tasks
    let allTasks = Helpers().getAllTasks;
    console.log(allTasks);
    
    // # Show all tasks
    showAllTasks(allTasks);
  };
  
  
  let showAllTasks = allTasks => {
    for (let i = 0; i < allTasks.length; i++) {
      // console.log(allTasks[i]);
      allTasks[i].style.display = "block";
    };
  };
  
  
  
  return {
    displayAllTasks: displayAllTasks()
  
  };
};
// End!