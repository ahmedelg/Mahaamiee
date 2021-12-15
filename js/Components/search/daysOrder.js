// Factory method to creates object -> returns object.
const daysOrder = (() => {
  // # `State` of daysOrder
  let state = {
    allFoundDays: []
  };
  // -----------------------
  // {
  //   allFoundDays: [{
  //     day_date: "Mon Oct 11 2021",
  //     day_tasks: []
  //   }]
  // };
  
  // # Get `all_found_days`
  const getAllFoundDays = () => state.allFoundDays;
  // -----------------------
  const displayAllExistedDays = () => {
    // [+1] Get all days from workspace
    const allDays = Helpers().getAllTasks;
    
    // # Get `all_found_days`
    // allFoundDays = getAllFoundDays()
    
    // [+2] Through each task
    allDays.forEach(task => { 
      // console.log(task);
      // [+2.1] Get task's `created_date`
      const created_date = Helpers().getCreatedDate(task);
      // console.log(created_date) `Mon Oct 11 2021`
      
      // [+2.2] Check is `exists` or `not exists`?
      const exists = isExists({day_date: created_date, task});
      // console.log(exists);
      
      // [+2.3] Hide `task`
      Helpers().hideTask(task);
      
      // [+2.4] Handle `existence` of `day`
      handleTaskExistence(exists);
    });
    
    // console.log("All Days with its tasks")
    // console.log(getAllFoundDays())
    
    // # Display `all_found_tasks` in the workspace
    showAllFoundDays()
    
    // # Empty the `all_found_days` arr >> `reuse again`
    state.allFoundDays = [];
    
    
    
  }; // End! displayAllExistedDays()
  // -----------------------
  // # Check if day `exists` or `not exists`?
  const isExists = ({day_date, task}) => {
      // # Get `all_found_days`
      allFoundDays = getAllFoundDays();
      
      // # Through all found days
      for (let i in allFoundDays) { 
        // # Check if `exists` or `not exists`?
        if (day_date === allFoundDays[i].day_date) {
          // ? exists
          // console.log("exists")
          return {
            result: true,
            allFoundDays: allFoundDays,
            position: i,
            task_title: Helpers().TASK_TITLE(task)
          };
        };
      };
    // ? Not exists
    // console.log("not exists")
    return {
      result: false,
      allFoundDays: allFoundDays,
      day_date: day_date,
      task_title: Helpers().TASK_TITLE(task)
    };
  };
  // -----------------------
  // # Handle `existence` of `task`
  const handleTaskExistence = ({ 
    result, 
    allFoundDays, 
    position,
    day_date,
    task_title
  }) => {
    if (result) {
      // ?exists
      // # Store `task` in it
      console.log("Store a new task in existed date")
      storeTask({
        task_title: task_title,
        position: position,
        allFoundDays: allFoundDays
      });
    } else { 
      // ?`Not exists` day not found yet...
      console.log("Create a new date")
      // # Create a new `day_date`
      createNewDayDate({
        allFoundDays,
        day_date,
        task_title
      });
    };
  };
  // -----------------------
  // console.log(getAllFoundDays())
  
  // # Store `task`
  const storeTask = ({
    task_title,
    position,
    allFoundDays
  }) => {
    // console.log(allFoundDays);
    allFoundDays[position].day_tasks.push(task_title);
  };
  // -----------------------
  // # Create a new `day_date`
  const createNewDayDate = ({
    allFoundDays,
    day_date,
    task_title
  }) => {
    // console.log(allFoundDays)
    allFoundDays.push({
      day_date: day_date,
      day_tasks: [task_title]
    });
  };
  // -----------------------
  // # Show `all_found_days` in workspace
  const showAllFoundDays = () => {
    // # Get `all_found_days`
    const all_found_days = getAllFoundDays();
    
    // # Get `all_found_days`
    const allFoundDays = getAllFoundDays();
    
    // #
    // let foundDaysSameDateCntr = document.createElement("div");
    // foundDaysSameDateCntr.id = "searchResult";
    Helpers().handleSearchResult();
    let searchResult = document.getElementById("searchResult");
    // return searchResult
    
    let searchTitle = document.createElement("h2");
    searchTitle.classList.add("search-title");
    searchTitle.textContent = "search result";
    searchResult.append(searchTitle);
    
    
    const allSameDaysDatesComps = createSameCreatedDateDayTasks(all_found_days).allSameDatesTasksComp;
    // return console.log(allSameDaysDatesComp)
    
    // # Insert all `same_created_date_day_tasks` in its container
    allSameDaysDatesComps.forEach(sameDayTaskComp => { 
      searchResult.append(sameDayTaskComp);
    });
    
    // searchResult.append(allSameDaysDatesComp)
    
    // // # Position of result of search
    // searchResult.append()
    // # Show `search_result`
    searchResult.style.display = "block";
    
  }; // End! showAllFoundDays()
  // -----------------------
  // # Create `same_created_date_day_tasks`
  const createSameCreatedDateDayTasks = allFoundDays => {    
    let allSameDatesTasksComp = new Array();
    
    // # Get all same_date_tasks_titles
    // # Through each day
    allFoundDays.forEach(day => { 
      const sameDayTasks = document.createElement("div");
      sameDayTasks.classList.add("same-date-tasks");
      sameDayTasks.append(createDateComp(day.day_date));
      sameDayTasks.append(createSameDateTasksComp(day));
      allSameDatesTasksComp.push(sameDayTasks);
    });
    // console.log("All same-dates-tasks-comp...")
    // console.log(allSameDatesTasksComp)
    return {
      allSameDatesTasksComp: allSameDatesTasksComp
    };
  }; // End! createSameCreatedDateDayTasks()
  // -----------------------
  // # Create `same_date_tasks_Sec`
  const createSameDateTasksComp = day => {
    const ol = document.createElement("ol");
    ol.classList.add("tasks-list");
    const DAY_TASKS = day.day_tasks;
    for (let i in DAY_TASKS) {
      let li = document.createElement("li");
      li.textContent = DAY_TASKS[i];
      ol.append(li);
    };
    return ol;
  };
  // -----------------------
  // # Create `date`
  const createDateComp = date => {
    const p = document.createElement("p");
    p.classList.add("day-date");
    p.textContent = date;
    return p;
  };
  // -----------------------
  return {
    displayAllExistedDays: displayAllExistedDays
  };
})();
// End!
