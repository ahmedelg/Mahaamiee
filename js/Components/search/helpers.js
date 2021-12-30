let Helpers = () => {
  this.SEARCH_RESULT_CNTR = document.getElementById("searchResultContainer");
  // console.log(this.SEARCH_RESULT_CNTR.querySelector("#searchResult"));
  // ----------------------
  // # Get task's value
  let taskValue = () => document.querySelector(".create-task .task-name").value;
  // ----------------------
  // # Get all tasks in the workspace
  let getAllTasks = () => document.querySelectorAll(".task");
  // ----------------------
  // # Get created-date of task
  let getCreatedDate = (task) => task.querySelector(".build-date").textContent;
  // ----------------------
  // # Get `created-address` of `task`
  let getTaskTitle = (task) => task.querySelector(".task-name-sec").textContent;
  // ----------------------
  // # Get the rest of search's order
  let getRestFOrder = (tskValue) => {
    let orderInfo = getOrderInfo(tskValue);
    // Return rest of order
    return tskValue.slice(orderInfo.orderLength + 2, tskValue.length);
  };
  // ----------------------
  // # Get order
  let getOrder = (tskValue) => {
    // # Get required order
    return tskValue.split(" ")[0].slice(1, tskValue.length); // ['','']
  };
  // ----------------------
  // # Get info about order
  let getOrderInfo = (tskValue) => {
    let order = getOrder(tskValue);
    return {
      order,
      orderLength: order.length,
    };
  };
  // ----------------------
  // # Get order
  let getOrderRest = (tskValue) => {
    // # Get required order
    if (tskValue) return tskValue.split(" ")[1];
    return false;
  };
  // ----------------------
  // # Hide `task`
  const hideTask = (task) => (task.style.display = "none");
  // ----------------------
  // # Show all tasks in workspace
  const showAllTasks = () => {};
  // ----------------------
  // # Hide `search_results`
  const hideSearchResult = () => {
    let searchResultsCntr = document.getElementById("searchResult");
    searchResultsCntr.style.display = "none";
    // searchResultsCntr.remove()
  };

  // ----------------------
  // # Handle `search_results`
  const handleSearchResult = () => {
    const searchResult = document.getElementById("searchResult");
    if (searchResult) {
      searchResult.remove();
      // # (Recreate & Add) `search_results`
      addSearchResult(createSearchResult());
    } else {
      // # Recreate `search_results`
      addSearchResult(createSearchResult());
    }
  };
  // ----------------------
  // # Get `search-result`
  const getSearchResult = () =>
    this.SEARCH_RESULT_CNTR.querySelector("#searchResult");
  // ----------------------
  // # Create `search_results`
  const createSearchResult = () => {
    const searchResult = document.createElement("div");
    searchResult.id = "searchResult";
    return searchResult;
  };
  // ----------------------
  // # Add `search_results`
  const addSearchResult = (searchResult) => {
    this.SEARCH_RESULT_CNTR.append(searchResult);
  };
  // ----------------------
  // # Show `search_result`
  const showSearchResult = (searchResult) => {
    // [+1] Handle `searchResult`
    handleSearchResult();

    // [+2] Get done-tasks-container
    // .>> & render it in `searchResult`
    getSearchResult().append(searchResult);
  };
  // ----------------------
  // render specific tasks
  const renderSpecTasks = (specTasks) => {
    // Check specTask not empty
    if (!specTasks.length) {
      alert("there are no tasks to be rendered...");
      return 0;
    }
    const allTasks = [...getAllTasks()];
    // // let restTasks = new Array();
    // allTasks:
    // for (let task = 0; task < allTasks.length; task++) {
    //   console.log("................. INPUTs ..................");
    //   console.log(task, "specTasks: ", specTasks);
    //   console.log("--------------------------------.");
    //   specTasks:
    //   for (let specTask = 0; specTask <= specTasks.length - 1; specTask++) {
    //     console.log(allTasks[task] == specTasks[specTask]);
    //     allTasks[task].style.display = "block";
    //     console.log(allTasks[task], specTasks[specTask]);
    //     console.log('task of allTasks');
    //     console.log(allTasks[task])
    //     console.log("allTasks");
    //     console.log(allTasks);
    //     // Search about task in specTasks
    //     if (allTasks[task] == specTasks[specTask]) {
    //       console.log("state: ",true)
    //       // Remove specTask from specTasks
    //       specTasks.splice(specTask, 1); // decreases the length 3 > 2
    //       allTasks[task].style.display = "block";
    //       allTasks[task].style.backgroundColor = "red";
    //       allTasks.splice(task, 1);
    //       // console.log("-----------------------")
    //       // console.log(specTask);
    //       // console.log(specTasks)
    //       // console.log("-----------------------")
    //       break specTasks;
    //     } else {
    //       console.log("state: ",false)
    //       allTasks[task].style.display = "none";
    //       allTasks.splice(task, 1);
    //     }
    //   } // End specTasks
    //   if (!specTasks.length) break allTasks;

    //   console.log("........... OUTPUTs ........................");
    //   console.log(task, "specTasks: ", specTasks);
    //   console.log("allTasks:");
    //   console.log(allTasks);
    //   console.log("--------------------------------.");

    // } // End allTasks

    // console.log(specTasks);
    // console.log(allTasks);

    //   for (let task = 0; task < allTasks.length; task++) {
    //     // console.log(allTasks[task])
    //     for (let specTask = 0; specTask < specTasks.length; specTask++) {
    //       if (allTasks[task] === specTasks[specTask]) {
    //         allTasks[task].style.display = "block";
    //         allTasks[task].style.backgroundColor = "green";
    //         // Remove from specTasks
    //         specTasks.splice(specTask, 1);
    //         // Remove from allTasks
    //         allTasks.splice(task, 1);
    //         console.log(allTasks[task]);
    //       } else {
    //         console.log("not equal");
    //         // ? `not exists`
    //         allTasks[task].style.display = "none";
    //       }
    //     } // End specTasks
    //     if (!specTasks.length) break;
    //   } // End allTasks

    //   console.log(allTasks);
    hideAllTasks();
    showSpecTasks(specTasks);
  }; // End (+) renderSpecTasks

  const hideAllTasks = () => {
    document.querySelectorAll(".task").forEach((task) => {
      task.style.display = "none";
    });
  };

  const showSpecTasks = (specTasks) => {
    specTasks.forEach(task => {
      task.style.display = "block";
    })
  }

  return {
    getAllTasks: getAllTasks(),
    getCreatedDate: getCreatedDate,
    getRestFOrder: getRestFOrder,
    taskValue: taskValue(),
    getOrder: getOrder,
    TASK_TITLE: getTaskTitle,
    hideTask: hideTask,
    showAllTasks: showAllTasks(),
    showSearchResult: showSearchResult,
    hideSearchResult: hideSearchResult,
    getOrderRest: getOrderRest,
    renderSpecTasks: renderSpecTasks,
    // handleSearchResult: handleSearchResult,
    // getSearchResult: getSearchResult
  };
};
// End!
