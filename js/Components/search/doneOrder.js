let doneOrder = (() => {
  // -------------------------
  const displayAllDoneTasks = () => { 
    // [+1] Get `all-done-tasks`
    const doneTasksStack = doneTasks.DONE_TASKS_STACK();
    this.doneTasksStack = doneTasksStack;
    // [+2] Render `search-results`
    Helpers().showSearchResult(getAllDoneTasks());
  };
  // -------------------------
  // # Get all `done-tasks-elements`
  const getAllDoneTasks = () => { 
    // console.log(this.doneTasksStack); //
    // .>> To be added in `searchResult`
    let doneTasksCntr = document.createElement("div");
    this.doneTasksStack.forEach(({
      title,
      createdDate,
      endDate
    }) => { 
      // # Task container
      let taskCntr = createTaskCntr();
      // # Add `task-title`
      taskCntr.append(createTaskTitle(title));
      // # Add `task-created-date`
      taskCntr.append(createCreatedDate(createdDate));
      // # Add `task-end-or-done-date`
      taskCntr.append(createEndDate(endDate));
      // # Add `task-container`
      doneTasksCntr.append(taskCntr);
    });
    return doneTasksCntr;
  };
  // -------------------------
  // # Create `task-t-view`
  const createTaskCntr = () => { 
    const div = document.createElement("div");
    div.classList.add("done-task-container");
    return div;
  };
  // -------------------------
  // # Create 'task-title'
  const createTaskTitle = title => { 
    const p = document.createElement("p");
    p.classList.add("done-task-title")
    p.textContent = title;
    return p;
  };
  // -------------------------
  // # Create 'created-date-of-task'
  const createCreatedDate = createdDate => { 
    const span = document.createElement("span");
    span.classList.add("done-task-created-date")
    span.textContent = createdDate;
    return span;
  };
  // -------------------------
  // # Create 'end-date-of-task'
  const createEndDate = endDate => { 
    const span = document.createElement("span");
    span.classList.add("done-task-end-date")
    span.textContent = endDate;
    return span;
  };
  // -------------------------
  return {
    displayAllDoneTasks: displayAllDoneTasks
  };
})();
// End!