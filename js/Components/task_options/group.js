<<<<<<< HEAD
const group = (() => {
  this.groups = [
    // {
    //   address:
    //   tasks
    // }
  ];

  this.taskTBeGrouped = "";
  this.taskAddressCntr = "";

  // console.log("Group Option")
  const addGroup_Listener = ({ p, e }) => {
    // Store `task`
    this.taskTBeGrouped = getTask(p);
    // return console.log(this.taskTBeGrouped)
    // # Store `task-address` or `title`
    this.taskAddressCntr = p;
    e.stopPropagation();
    // console.log("add task");
    let input = createGroupInput();
    // console.log(p.querySelector(".group-identifier"))
    p.innerHTML = ""; // first-time remove `new-selector-text`
    if (p.querySelector(".group-identifier")) {
      // null
      p.innerHTML = "";
    }
    p.append(input);
  };

  const getTask = (p) =>
    p.parentElement.parentElement.parentElement.parentElement;
  const getTaskOptions = (p) => p.parentElement.parentElement;

  const hideTaskOptions = () => {
    // return console.log(getTaskOptions(this.taskAddressCntr))
    getTaskOptions(this.taskAddressCntr).remove();
  };

  // const displayTaskOptions = () => {

  // };

  const createGroupIdentifier = (grVl) => {
    let span = document.createElement("span");
    span.classList.add("group-address");
    span.textContent = grVl;
    return span;
  };

  const addTask = (tsk) => {};

  const createGroupInput = () => {
    const input = document.createElement("input");
    input.classList.add("group-identifier");
    input.value = "new selector";
    input.onclick = (e) => {
      e.stopPropagation();
    };
    return input;
  };

  // --------------------------------------
  // # Check if `new-selector` exists?
  const isSelectorExistsInTaskGroups = (selector) => {
    // let taskGroupsCntr = ;
    return !TASK_SELECTOR_CONTAINER()
      ? { taskGroupCntr: false }
      : (() => {
          // # Search if there is `same-selector` in the `task-groups`
          return { selector: checkSelector(selector) };
        })();
  };
  // --------------------------------------
  const TASK_SELECTOR_CONTAINER = () =>
    this.taskTBeGrouped.querySelector(".task-groups");
  // --------------------------------------
  // # Get `all-selectors` of task
  const getAllSelectorsFTask = () =>
    TASK_SELECTOR_CONTAINER().querySelectorAll(".group-identifier");
  // --------------------------------------
  // # Check is selector exists or not?
  const checkSelector = (selector) => {
    getAllSelectorsFTask().forEach((slctr) => {
      if (selector === slctr) {
        return true; // ?Found
      }
    });
    return false; // ?Not Found
  };
  // --------------------------------------
  // # Create `groups-container`
  const createGroupContainer = (cls) => {
    const groupCntr = document.createElement("div");
    groupCntr.classList.add(cls);
    return groupCntr;
  };
  // --------------------------------------
  const addGroupContainer = () => {
    let classAttr = "task-groups";
    let newGroup = createGroupContainer(classAttr);
    this.taskTBeGrouped.append(newGroup);
    return { createdGroup: newGroup };
  };
  // --------------------------------------
  // # Add `task` in `task-groups`
  const addTaskInGroup = (grVl) => {
    // # Get `task`
    let task = this.taskTBeGrouped;

    // ################# Selector-Group check? ###################
    // return console.log(isSelectorExistsInTaskGroups(grVl));
    const selctorGroupCheck = isSelectorExistsInTaskGroups(grVl);
    let createdGroup = false;
    if (selctorGroupCheck.taskGroupCntr === false) {
      // ?`selecotrs-container`
      // .>> not exists
      // .>> The task hasn't any selectors yet
      // # Create & Add a new group - class: `task-groups` in `task`
      createdGroup = addGroupContainer().createdGroup;
      // console.log(createdGroup)
      // # Add `new-selector` in `new-group-container`
    }
    // ################# End Selector-Group check? #################
    // ############### Check group? ######################
    // # Check group?
    let GROUB_EXISTS = isGroupExists(grVl);
    if (GROUB_EXISTS.result) {
      // console.log("exists")
      // ?exists
      // [+1] Check if `task exists` in `group`?
      const IS_TASK_EXISTs = findCurrentTaskInSpecificGroup({
        position: GROUB_EXISTS.position,
      });
      if (IS_TASK_EXISTs) {
        // # Send alert message
        alert("Selectors already exists...");
        return 0;
      }

      // [+2] Add task to `exists-group`
      this.groups[GROUB_EXISTS.position].tasks.push(task);
    } else {
      // ?Not_exists
      // # Create new group
      createNewGroup({
        address: grVl,
        task: task,
      });
    }
    // ################# End check group? ###############
    // # Display `group-identifier`
    let groupAddress = createGroupIdentifier(grVl);
    // # Check if `new-group`?
    if (createdGroup) {
      // # Add `new-selector` in `created-group-container`
      createdGroup.append(groupAddress);
    }
    // # Add `new-selector` in 'already-group-container`
    TASK_SELECTOR_CONTAINER().append(groupAddress);
    // # Hide `task-options`
    hideTaskOptions();
    // # Handle `enter`
    enterRun = "task-created";
  };
  // --------------------------------------
  // # Check if `task` exists in `specific-group`
  const findCurrentTaskInSpecificGroup = (group) => {
    let { position } = group;
    // [+1] Get `all-tasks` of `specific-group`
    let allTasksFGroup = this.groups[position].tasks;
    // [+2] Search about `current-task`
    for (let i in allTasksFGroup) {
      if (this.taskTBeGrouped === allTasksFGroup[i]) {
        // ? `Tasks exists`
        return true;
      }
    }
    // ? `Task not exists`
    return false;
  };
  // --------------------------------------
  const isGroupExists = (grVl) => {
    let groups = this.groups;
    // console.log(groups)
    for (let i in groups) {
      // console.log(groups[i].address)
      // console.log(groups)
      if (grVl === groups[i].address) {
        return {
          result: true,
          position: i,
        };
      }
    }
    // console.log("not exists")
    return {
      result: false,
    };
  };
  // --------------------------------------
  const createNewGroup = ({ address, task }) => {
    let newGroup = {
      address: address,
      tasks: [task],
    };
    this.groups.push(newGroup);
  };
  // --------------------------------------
  const saveRuntimeGroups = () => {
    isSavedGroupsDBExists();
    // return console.log(group.groups);
    localStorage.setItem("savedGroups", JSON.stringify(group.groups));
  };
  // --------------------------------------
  // const getSavedGroups = () => {
  //   const savedGroups = localStorage.getItem("savedGroups");
  //   // check null?
  //   if (!savedGroups) {
  //     return {};
  //   } else {
  //     console.log(savedGroups);
  //   }
  // };
  // --------------------------------------
  // const reloadSavedGroups = () => {
  //   const savedGroups = isSavedGroupsDBExists();
  //   console.log(savedGroups);
  //   // group.groups = savedGroups;
  // };
  // --------------------------------------
  const reloadTaskSavedGroups = (TASKs) => {
    const groups = [];
    TASKs.forEach((tsk) => {
      
    });
  };
  // --------------------------------------
  const isSavedGroupsDBExists = () => {
    const savedGroups = localStorage.getItem("savedGroups");
    if (!savedGroups) {
      // # Build `savedGroups` db
      localStorage.setItem("savedGroups", JSON.stringify([]));
      return JSON.parse(localStorage.getItem("savedGroups"));
    } else {
      return JSON.parse(savedGroups);
    }
  };
  // --------------------------------------
  return {
    addGroup_Listener: addGroup_Listener,
    addTaskInGroup: addTaskInGroup,
    saveRuntimeGroups: saveRuntimeGroups, // error tasks is empty
    // reloadSavedGroups: reloadSavedGroups,
    reloadTaskSavedGroups: reloadTaskSavedGroups,
    groups: this.groups,
  };
})();
// _run reload `savedGroups` F localStorage
// group.reloadSavedGroups();
// document.addEventListener("onload", (vnt) => {
//   console.log("loaded");

// });

window.onload = () => {
  console.log("loaded");
  const ALL_TASKS = document.querySelectorAll(".task");
  group.reloadTaskSavedGroups(ALL_TASKS);
};
=======
const group = (() => {
  this.groups = [
    // {
    //   address:
    //   tasks
    // }
  ];

  this.taskTBeGrouped = "";
  this.taskAddressCntr = "";

  // console.log("Group Option")
  const addGroup_Listener = ({ p, e }) => {
    // Store `task`
    this.taskTBeGrouped = getTask(p);
    // return console.log(this.taskTBeGrouped)
    // # Store `task-address` or `title`
    this.taskAddressCntr = p;
    e.stopPropagation();
    // console.log("add task");
    let input = createGroupInput();
    // console.log(p.querySelector(".group-identifier"))
    p.innerHTML = ""; // first-time remove `new-selector-text`
    if (p.querySelector(".group-identifier")) {
      // null
      p.innerHTML = "";
    }
    p.append(input);
  };

  const getTask = (p) =>
    p.parentElement.parentElement.parentElement.parentElement;
  const getTaskOptions = (p) => p.parentElement.parentElement;

  const hideTaskOptions = () => {
    // return console.log(getTaskOptions(this.taskAddressCntr))
    getTaskOptions(this.taskAddressCntr).remove();
  };

  // const displayTaskOptions = () => {

  // };

  const createGroupIdentifier = (grVl) => {
    let span = document.createElement("span");
    span.classList.add("group-address");
    span.textContent = grVl;
    return span;
  };

  const addTask = (tsk) => {};

  const createGroupInput = () => {
    const input = document.createElement("input");
    input.classList.add("group-identifier");
    input.value = "new selector";
    input.onclick = (e) => {
      e.stopPropagation();
    };
    return input;
  };

  // --------------------------------------
  // # Check if `new-selector` exists?
  const isSelectorExistsInTaskGroups = (selector) => {
    // let taskGroupsCntr = ;
    return !TASK_SELECTOR_CONTAINER()
      ? { taskGroupCntr: false }
      : (() => {
          // # Search if there is `same-selector` in the `task-groups`
          return { selector: checkSelector(selector) };
        })();
  };
  // --------------------------------------
  const TASK_SELECTOR_CONTAINER = () =>
    this.taskTBeGrouped.querySelector(".task-groups");
  // --------------------------------------
  // # Get `all-selectors` of task
  const getAllSelectorsFTask = () =>
    TASK_SELECTOR_CONTAINER().querySelectorAll(".group-identifier");
  // --------------------------------------
  // # Check is selector exists or not?
  const checkSelector = (selector) => {
    getAllSelectorsFTask().forEach((slctr) => {
      if (selector === slctr) {
        return true; // ?Found
      }
    });
    return false; // ?Not Found
  };
  // --------------------------------------
  // # Create `groups-container`
  const createGroupContainer = (cls) => {
    const groupCntr = document.createElement("div");
    groupCntr.classList.add(cls);
    return groupCntr;
  };
  // --------------------------------------
  const addGroupContainer = () => {
    let classAttr = "task-groups";
    let newGroup = createGroupContainer(classAttr);
    this.taskTBeGrouped.append(newGroup);
    return { createdGroup: newGroup };
  };
  // --------------------------------------
  // # Add `task` in `task-groups`
  const addTaskInGroup = (grVl) => {
    // # Get `task`
    let task = this.taskTBeGrouped;

    // ################# Selector-Group check? ###################
    // return console.log(isSelectorExistsInTaskGroups(grVl));
    const selctorGroupCheck = isSelectorExistsInTaskGroups(grVl);
    let createdGroup = false;
    if (selctorGroupCheck.taskGroupCntr === false) {
      // ?`selecotrs-container`
      // .>> not exists
      // .>> The task hasn't any selectors yet
      // # Create & Add a new group - class: `task-groups` in `task`
      createdGroup = addGroupContainer().createdGroup;
      // console.log(createdGroup)
      // # Add `new-selector` in `new-group-container`
    }
    // ################# End Selector-Group check? #################
    // ############### Check group? ######################
    // # Check group?
    let GROUB_EXISTS = isGroupExists(grVl);
    if (GROUB_EXISTS.result) {
      // console.log("exists")
      // ?exists
      // [+1] Check if `task exists` in `group`?
      const IS_TASK_EXISTs = findCurrentTaskInSpecificGroup({
        position: GROUB_EXISTS.position,
      });
      if (IS_TASK_EXISTs) {
        // # Send alert message
        alert("Selectors already exists...");
        return 0;
      }

      // [+2] Add task to `exists-group`
      this.groups[GROUB_EXISTS.position].tasks.push(task);
    } else {
      // ?Not_exists
      // # Create new group
      createNewGroup({
        address: grVl,
        task: task,
      });
    }
    // ################# End check group? ###############
    // # Display `group-identifier`
    let groupAddress = createGroupIdentifier(grVl);
    // # Check if `new-group`?
    if (createdGroup) {
      // # Add `new-selector` in `created-group-container`
      createdGroup.append(groupAddress);
    }
    // # Add `new-selector` in 'already-group-container`
    TASK_SELECTOR_CONTAINER().append(groupAddress);
    // # Hide `task-options`
    hideTaskOptions();
    // # Handle `enter`
    enterRun = "task-created";
  };
  // --------------------------------------
  // # Check if `task` exists in `specific-group`
  const findCurrentTaskInSpecificGroup = (group) => {
    let { position } = group;
    // [+1] Get `all-tasks` of `specific-group`
    let allTasksFGroup = this.groups[position].tasks;
    // [+2] Search about `current-task`
    for (let i in allTasksFGroup) {
      if (this.taskTBeGrouped === allTasksFGroup[i]) {
        // ? `Tasks exists`
        return true;
      }
    }
    // ? `Task not exists`
    return false;
  };
  // --------------------------------------
  const isGroupExists = (grVl) => {
    let groups = this.groups;
    // console.log(groups)
    for (let i in groups) {
      // console.log(groups[i].address)
      // console.log(groups)
      if (grVl === groups[i].address) {
        return {
          result: true,
          position: i,
        };
      }
    }
    // console.log("not exists")
    return {
      result: false,
    };
  };
  // --------------------------------------
  const createNewGroup = ({ address, task }) => {
    let newGroup = {
      address: address,
      tasks: [task],
    };
    this.groups.push(newGroup);
  };
  // --------------------------------------
  const saveRuntimeGroups = () => {
    isSavedGroupsDBExists();
    // return console.log(group.groups);
    localStorage.setItem("savedGroups", JSON.stringify(group.groups));
  };
  // --------------------------------------
  // const getSavedGroups = () => {
  //   const savedGroups = localStorage.getItem("savedGroups");
  //   // check null?
  //   if (!savedGroups) {
  //     return {};
  //   } else {
  //     console.log(savedGroups);
  //   }
  // };
  // --------------------------------------
  // const reloadSavedGroups = () => {
  //   const savedGroups = isSavedGroupsDBExists();
  //   console.log(savedGroups);
  //   // group.groups = savedGroups;
  // };
  // --------------------------------------
  const reloadTaskSavedGroups = (TASKs) => {
    const groups = [];
    TASKs.forEach((tsk) => {
      
    });
  };
  // --------------------------------------
  const isSavedGroupsDBExists = () => {
    const savedGroups = localStorage.getItem("savedGroups");
    if (!savedGroups) {
      // # Build `savedGroups` db
      localStorage.setItem("savedGroups", JSON.stringify([]));
      return JSON.parse(localStorage.getItem("savedGroups"));
    } else {
      return JSON.parse(savedGroups);
    }
  };
  // --------------------------------------
  return {
    addGroup_Listener: addGroup_Listener,
    addTaskInGroup: addTaskInGroup,
    saveRuntimeGroups: saveRuntimeGroups, // error tasks is empty
    // reloadSavedGroups: reloadSavedGroups,
    reloadTaskSavedGroups: reloadTaskSavedGroups,
    groups: this.groups,
  };
})();
// _run reload `savedGroups` F localStorage
// group.reloadSavedGroups();
// document.addEventListener("onload", (vnt) => {
//   console.log("loaded");

// });

window.onload = () => {
  console.log("loaded");
  const ALL_TASKS = document.querySelectorAll(".task");
  group.reloadTaskSavedGroups(ALL_TASKS);
};
>>>>>>> c38ad0feeb1a8ad2530477d68239c02ed71aecdd
