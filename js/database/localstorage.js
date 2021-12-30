// # Local-Storage-Structure
// # Get all data about all current simple-tasks
const getAllTasksInfo = (allCurrTasks) => {
  // #2 Extract all tasks info
  let i = 0;
  let tasksStackTStore = [];
  while (i < allCurrTasks.length) {
    // get task's info
    let taskInfo = extractInfoFTsk(allCurrTasks[i++]);
    tasksStackTStore.push(taskInfo);
  }
  // console.log(tasksStackTStore);
  // #3 Return all tasks' info
  return tasksStackTStore; // There're no tasks founded > emtpy array
};
// ----------------------------------------------------
// Get all data about the urgent-tasks
function getAllDataUrgentTasks() {
  // #1 Get all urgent tasks from workspace
  let urgentTasks = getAllUrgentTasks();
  // #2
}
// ----------------------------------------------------
// # Save current tasks
function saveDeterminedTasks(allDeterminedTasks) {
  // #1 Handle tasksStack datastore
  initTasksStackStructure();
  // #2 Check if empty or not
  if (allDeterminedTasks.length === 0) {
    return alert("There are no tasks to be saved...");
  }
  // #3 Save determined-tasks
  saveTasksStack(allDeterminedTasks);
  alert("Tasks have been saved....");
}
// ----------------------------------------------------
// # Save urgent-tasks
function saveUrgentTasks(allDeterminedUrgentTasks) {
  initUrgentTasksStore();
  if (allDeterminedUrgentTasks.length === 0) {
    return alert("There are no urgent-tasks to be saved...");
  }
  saveUrgentTasksStore(allDeterminedUrgentTasks);
}
// ----------------------------------------------------
// # Reload all tasks from tasksStack datastore
(function reloadSavedTasks() {
  reloadSimpleTasks();
  reloadUrgentTasks();
})();
// ----------------------------------------------------
// # Reload simple tasks
function reloadSimpleTasks() {
  // #1 Check tasksStack datastore
  let tasksStackCheck = initTasksStackStructure();
  // + Check if it's empty > there're no tasks to show
  if (tasksStackCheck.length === 0) {
    console.log("tasksStack is empty!");
    return 0;
  }
  // return console.log(tasksStackCheck); // !!
  // #2 Extracts tasks' data
  let extractedTasksInfo = extractTasksFDb(tasksStackCheck);
  // return console.log(extractedTasksInfo); // !!
  // #3 Show extracted tasks' data in the workspace
  let i = 0;
  while (i < extractedTasksInfo.length) {
    // + Create task structure
    let newTask = tasksDom.createTask({
      name: extractedTasksInfo[i].name,
      createdDate: extractedTasksInfo[i].createdDate,
      groups:extractedTasksInfo[i].groups,
      reload: true,
    });
    // console.log(newTask);
    i++;
    // # Add listeners required for the tasks
    specifyTaskListener(newTask);
    // Add new tasks to workspace
    tasksDom.stack.append(newTask);
  }
}
// ----------------------------------------------------
// # Reload urgent tasks
function reloadUrgentTasks() {
  // #1 Check tasksStack datastore
  let tasksStackCheck = initUrgentTasksStore();
  // + Check if it's empty > there're no tasks to show
  if (tasksStackCheck.length === 0) {
    console.log("Urgent tasks stack is empty!");
    return 0;
  }
  // console.log(tasksStackCheck);
  // #2 Extracts tasks' data
  let extractedTasksInfo = extractTasksFDb(tasksStackCheck);
  // #3 Show extracted tasks' data in the workspace
  let i = 0;
  while (i < extractedTasksInfo.length) {
    // + Create task structure
    let newTask = tasksDom.createTask({
      name: extractedTasksInfo[i].name,
      createdDate: extractedTasksInfo[i].createdDate,
      reload: true,
    });
    i++;
    // # Add listeners required for the tasks
    specifyTaskListener(newTask);
    // Add new tasks created to workspace
    document.getElementById("urgent-tasks-container").append(newTask);
  }
}
// ----------------------------------------------------
