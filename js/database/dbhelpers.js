// # Get all tasks from live workspace
const getAllExitedTasks = () => tasksStack.querySelectorAll(".task");

// # Get all urgent-tasks from live workspace
const getAllUrgentTasks = () => {
  let urgentTasksCntr = document.getElementById("urgent-tasks-container");
  return urgentTasksCntr.querySelectorAll(".task");
};

// # Extract tasks' info from workspace
function extractInfoFTsk(tsk) {
  return {
    // name
    name: tsk.querySelector(".task-name-sec").textContent,
    // created-date
    createdDate: tsk.querySelector(".build-date").textContent,
    steps: "none",
    important: tsk.classList.contains("important-task"),
    run: tsk.classList.contains("current-task"),
    groups:groupDbAPI.extractGroupsFTask(tsk)
  };
}

// # Extract tasks' info from localStorage tasksStack datastore
function extractTasksFDb(tasksStack) {
  let tasksInfo = [],
    i = 0;
  while (i < tasksStack.length) {
    tasksInfo.push({
      name: tasksStack[i].name,
      createdDate: tasksStack[i].createdDate,
      groups:tasksStack[i].groups
    });
    i++;
  }
  // Return all tasks' info [{},{},{}]
  return tasksInfo;
}

// # SetUp stack of `tasksStack-datastore`
function initTasksStackStructure() {
  let tasksStackCheck = localStorage.getItem("tasksStack");
  if (tasksStackCheck) {
    // founded : created
    return JSON.parse(tasksStackCheck);
  } else {
    // .>> `not founded` : `not created`
    // # Create a tasksStack datastore
    localStorage.setItem("tasksStack", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("tasksStack"));
  }
}

// # Setup stack of urgent tasks' datastore
function initUrgentTasksStore() {
  // #1 Get urgentTasksStack datastore from localStorage
  let urgentChecker = localStorage.getItem("urgentTasksStack");

  // # Check if exists or not?
  if (urgentChecker) {
    return JSON.parse(urgentChecker);
  } else {
    localStorage.setItem("urgentTasksStack", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("urgentTasksStack"));
  }
}

// # Save in `tasksStack` datastore
function saveTasksStack(determinedTasks) {
  localStorage.setItem("tasksStack", JSON.stringify(determinedTasks));
}

// # Save in Urgent-Tasks datastore
function saveUrgentTasksStore(urgentTasks) {
  localStorage.setItem("urgentTasksStack", JSON.stringify(urgentTasks));
}

// # Show tasks in workspace
function showTasksIWorkSpace() {}
