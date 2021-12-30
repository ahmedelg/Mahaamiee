// TASKs DOM
let tasksDom = {};
// TASKs METHODs
let tasksHelpers = {};
// LISTENERs OF TO-DO-APP
let tasksListeners = {};
tasksDom.stack = document.getElementById("tasksStack");
// console.log(tasksDom.stack);
let colorCounter = 0;
// # REATE NEW TASK DOM
let taskData = {
  name: "none",
  selectors: [],
  reload: false,
  createdDate: "none",
};
tasksDom.createTask = (taskData) => {
  // Check if not `reload-tasks-process`
  if (!taskData.reload) {
    // MAKE SURE NAME_TASK NOT EMPTY
    if (document.querySelector(".create-task .task-name").value == "") {
      alert("Name of task is empty!");
      return false;
    }
  }
  let tskCntr = document.createElement("div"),
    tskName = taskData.name;
  // Add `task` class
  tskCntr.classList.add("task");
  // Create the task's container
  let tskNameCntr = document.createElement("p");
  // HNDL CLR SYS
  if (colorCounter == colors.length) {
    colorCounter = 0;
  }
  tskNameCntr.classList.add("task-name");
  tskNameCntr.classList.add("task-identifier");
  // Put name of task in task's container
  let tskNameSec = document.createElement("span");
  tskNameSec.classList.add("task-name-sec");
  tskNameSec.textContent = tskName;
  // console.log(tskNameSec);
  tskNameCntr.append(tskNameSec);
  let createDateItm = document.createElement("span");
  createDateItm.classList.add("build-date");
  if (taskData.reload) {
    // Put created-date of task
    createDateItm.textContent = taskData.createdDate;
  } else {
    // Put created-date of task
    createDateItm.textContent = dateCmp.getCurrentDate();
  }
  tskNameCntr.append(createDateItm);
  // Add new-task to tasks-stack
  tskCntr.append(tskNameCntr);
  // add `Groups`
  const TASK_GROUPs_CNTR = groupDbAPI.addTaskGroups(taskData.groups);
  // Check TASK_GROUPs_CNTR not null?
  if (TASK_GROUPs_CNTR)
    tskCntr.append(TASK_GROUPs_CNTR);
  // ####################################################################
  // // Create task-details
  // let tskDtls = document.createElement("section");
  // // Add task-details class
  // tskDtls.classList.add("task-details");
  // // Get current date
  // let tskData ={
  //   currDate: dateCmp.getCurrentDate(),
  //   endDate: getEndDate(tskName),
  //   counter: tskCounter(),
  //   state: 'still'
  // }
  // // Get end date of task
  // function getEndDate(tskName) {
  //   let indx = tskName.indexOf("//"); // indx+2 > length-1
  //   let clearedEndDate = tskName.slice(indx + 2, tskName.length).trim();
  //   // console.log(clearedEndDate);
  //   return clearedEndDate;
  // }
  // // Current date
  // let span = document.createElement("span");
  // span.textContent = tskData.currDate;
  // // Add current date
  // tskDtls.append(span)
  // // End date
  // span.textContent = tskData.endDate;
  // // Add end date
  // tskDtls.append(span)
  // Add task-details to task
  // tskCntr.append(tskDtls)
  // ####################################################################
  function tskCounter() {}
  // function createTskDtlsCnt() {}
  // READY THE SELECTORs
  // HANDLE SELECTORs' BUTTONs
  // (function () {
  //   for (let i = 0; i < taskData.selectors.length; i++){
  //     let btn = document.createElement('button')
  //     btn.textContent(taskData.selectors[i])
  //     // btn.style.background
  //   }
  // })()
  return tskCntr;
};
// ADD NEW TASK TO TASKS-STACK
tasksHelpers.addTask = (task) => {
  tasksDom.stack.append(task);
};
// ADD NEW TASK
tasksListeners.addNewTask = function () {};
// Create new task
function addTask() {
  // #1 Get the task's value
  let tskValue = document.querySelector(".create-task .task-name").value;
  // #2 Check the value of task is empty?
  if (tskValue === "") {
    alert("name of task is empty!");
    return false;
  }
  // # Check if search's order & exists?
  let isExistedSearchOrder = isExistsSearchOrder(tskValue); // {} || false
  if (isExistedSearchOrder.result) {
    return executesSearchOrder(isExistedSearchOrder.order);
  }
  // # Check task type?
  let { type, value } = defineTasksType(tskValue);
  // # Check the value of command?
  if (value === "") {
    alert("there is no task to created!");
    return false;
  }
  const NEW_TASK = tasksDom.createTask({
    // # Get value of new-task
    name: value,
  });
  // # Check type of task?
  switch (type) {
    case "not":
      tasksHelpers.addTask(NEW_TASK);
      specifyTaskListener(NEW_TASK);
      break;
    case "urgent":
      let urgentTasksCntr = document.getElementById("urgent-tasks-container");
      urgentTasksCntr.append(NEW_TASK);
      specifyTaskListener(NEW_TASK);
    default:
  }
  // # Empty the tasks-creator-value
  document.querySelector(".create-task .task-name").value = "";
  // #3 Check if task created correctly?
  if (NEW_TASK) {
    // #[+3.1] Define where put new tasks
    // #[+3.2] Add required listeners for each exists-task
    (function () {
      // <<Selects>>
    })();
  } // End (+) endTask
}
// # Define the target of new tasks
function defineTasksType(taskValue) {
  // #1 Check if there're commands' keywords?
  const command = taskValue.trim().slice(0, 2);
  // #2 Check command?
  switch (command) {
    case "Ut":
      // Urgent-Tasks
      // let urgentTasksCntr = document.getElementById("urgent-tasks-container");
      // urgentTasksCntr.append(newTask);
      console.log(">> Urgent task");
      return {
        type: "urgent",
        value: taskValue.slice(3, taskValue.length),
      };
      break;
    default:
      // Not-Specific
      // tasksHelpers.addTask(newTask);
      console.log(">> Not specific task");
      return {
        type: "not",
        value: taskValue,
      };
  }
  // console.log("new task has been added....");
}
