// TASKs T Be Deleted
let tasksTBeDelete = [];
// -----------------
// DELETEs ALL SPECIFIED TASKs
let allTasks = () => document.querySelectorAll(".task-identifier");
// -----------------
let getAllTasks = () => allTasks();
// -----------------
// Deletes the selected tasks
let deletesSelectedTasks = (ele) => {
  let { p } = ele;
  // # Remove task
  p.parentElement.parentElement.parentElement.parentElement.remove();
  enterRun = "task-created";
};
// -----------------
// # SetUp listeners of new tasks
function specifyTaskListener(task) {
  // # Add animations
  // let taskMoveAnimate = task.animate(
  //   [
  //     {
  //       // display: 'none',
  //       opacity: '.0'
  //     },
  //     {
  //       // display: 'none',
  //       opacity: '.3'
  //     },
  //     {
  //       // display: 'none',
  //       opacity: '.5'
  //     },
  //     {
  //       // display: 'none',
  //       opacity: '.7'
  //     },
  //     {
  //       opacity: '1'
  //     }
  //   ], {
  //     fill: 'forwards',
  //     easing: 'steps(4, end)',
  //     duration: aliceChange.effect.timing.duration / 2
  // });

  // # #1 On click the task
  // task.addEventListener('click', (event) => {
  //   // console.log(event)
  // });

  // #2 Run task
  // task.addEventListener('dblclick', (event) => {
  //   // console.log("current");
  //   event.stopPropagation();
  //   // # Add current-task class
  //   task.classList.add("current-task");
  // });

  // #3 Show task's options
  let taskIdentifier = task.querySelector(".task-identifier");
  taskIdentifier.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    let task = taskIdentifier;

    if (task.querySelector(".options-container")) {
      return false;
    }

    // # Task options
    let options = getMouseOptions();

    // let mousePosition = getMousePosition(event);

    // # Show options in workspace
    taskIdentifier.append(createOptions(options /*mousePosition*/));
  });
}
// -----------------
const getMouseOptions = () => {
  return [
    // {
    //   type: "important",
    //   benefit: "add important attribute"
    // },
    {
      type: "open",
      benefit: "open the task details - more information",
    },
    {
      type: "notify",
      benefit: "notify the date of task",
    },
    {
      type: "current",
      benefit: "run the task",
    },
    {
      type: "new selector",
      benefit: "add group to task",
    },
    {
      type: "done",
      benefit: "ends & deletes the task",
    },
    {
      type: "remove",
      benefit: "remove the task",
    },
    {
      type: "delay",
      benefit: "delay the task to another date",
    },
    {
      type: "counter",
      benefit: "set counter for task",
    },
  ];
};
// -----------------
const getMousePosition = (event) => {
  return {
    // x: event.pageX,
    // y: event.pageY
    top: event.pageY,
    left: event.pageX,
  };
};

// contextMenu.setAttribute('style', 'top: ' + event.pageY + 'px; left:'
//                       + event.pageX + 'px;');
// -----------------
// # Create options
const createOptions = (mouseOptions, mousePosition) => {
  let optionsCntr = document.createElement("div");
  optionsCntr.classList.add("options-container");
  // .>> specify `position-mouse`
  // optionsCntr.setAttribute('style', 'top: ' + mousePosition.top + 'px; left:'
  //                       + mousePosition.left + 'px;');

  let optionsStack = document.createElement("div");
  optionsStack.classList.add("options-stack");
  let allOptionsItems;

  // # Insert all option items in stack
  for (let i in mouseOptions) {
    let p = document.createElement("p");
    p.classList.add("option");
    p.textContent = mouseOptions[i].type;
    // # Add listeners
    let handledP = handleOptionsListeners(p, mouseOptions[i].type);
    // # Add Styles
    p = setOptionsStyle(handledP);
    // -> Set `option-attributes`
    p = setOptionsAttrs({
      element: p,
      type: mouseOptions[i].type,
    });
    optionsStack.append(p);
  }
  // .>> Add all options to container
  optionsCntr.append(optionsStack);
  return optionsCntr;
};
// -----------------
// # Set the style
let setOptionsStyle = (p) => {
  // return console.log(p);
  p.style.padding = "5px";
  p.style.borderBottom = "2px solid white";
  return p;
};
// -----------------
const handleOptionsListeners = (p, type) => {
  switch (type) {
    case "current":
      // enterRun = "task-created";
      p.onclick = (event) => {
        Current.runTask(p);
      };
      // return p;
      break;
    case "new selector":
      enterRun = "group"; // Enter
      p.onclick = (e) => {
        group.addGroup_Listener({ e, p });
      };
      break;
    case "done":
      p.onclick = (e) => doneTasks.add(p);
      break;
    case "open":
      // enterRun = "group"; // Enter
      break;
    case "notify":
      // enterRun = "group"; // Enter
      break;
    case "remove":
      // enterRun = "group"; // Enter
      p.onclick = (e) => deletesSelectedTasks({ p: e.target });
      break;
    case "delay":
      // enterRun = "group"; // Enter
      p.onclick = (e) => delayTasks.add(p);
      break;
    case "counter":
      p.addEventListener("click", (e) => {
        if (e.target.classList.contains("task-counter"))
          return counter.counterListener(p);
      });
      break;
    default:
      break;
  };

  return p;
}; // (+) End handleOptionsListeners
// -----------------
const setOptionsAttrs = ({ element, type }) => {
  switch (type) {
    // .>> counter attrs [state]
    case "counter":
      element.setAttribute("counter-state", "not-exist");
      element.setAttribute("counter-value", "00:00");
      element.setAttribute("counter-index", "none");
      element.classList.add("task-counter");
      break;
    default:
      break;
  }
  return element;
};
// -----------------
// # Get task position
let getTaskPosition = (event) => {
  // # Distance from top
  let topDistance = event.target.offsetTop;
  return {
    // width:
  };
};
// -----------------

// ###################

// ###################
// # Task listeners helpers
function taskListenersHelpers(task) {
  // #1 Task properties settings
  let props = {
    fontColor: "lightvar(--mn-clr)",
    borderColor: "lightvar(--mn-clr)",
    backgroundColor: "var(--mn-clr)",
  };

  // #2 Selects the task
  let selectsTask = function () {
    // [+2.1] Add task-selector class
    task.classList.add("task-selected");
    // [+2.2] Push task to be deleted
    tasksTBeDelete.push(task);
  };

  // #3 Unselects the task
  let unselectsTask = function () {
    // #1 Remove task-selector class
    task.classList.remove("task-selected");

    // #2 Return to default style
    // getUnselectedStyle();
    task.classList.add("task-name");

    // #3 Remove task from tasksTBDeleted
    let idxFTsk = tasksTBeDelete.indexOf(task);
    tasksTBeDelete.splice(idxFTsk, 1); // Remove Just One Task
  };

  // [+3.1] Get unselected style
  // let  getUnselectedStyle = function () {
  //   // #
  //   // let color = getColorFElement();

  //   task.style.backgroundColor = props.backgroundColor;
  //   task.style.color = props.fontColor;
  //   // task.style.borderColor = color;
  //   // REMOVE TASK F TASKS T BE DELETED LIST
  //   let idxFTsk = tasksTDelete.indexOf(ele);
  //   tasksTDelete.splice(idxFTsk, 1); // Remove Just One Task
  // };

  // function getColorFElement() {
  //   return task.parentElement.querySelector('span').style.color;
  // };

  // return methods of task's listeners
  return {
    selects: selectsTask,
    unselects: unselectsTask,
  };
}
// ###################
