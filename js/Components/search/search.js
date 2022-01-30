<<<<<<< HEAD
// # All orders of Search
let searchOrders = [
  "All",
  "Previous",
  "Today",
  "Now",
  "Date",
  "Group",
  "Days",
  "Done",
  "Delay",
  "Group_",
  // # Make new group
];

// # Check if order & exists or not?
function isExistsSearchOrder(tskValue) {
  // # Check order or not?
  if (isOrder(tskValue)) {
    // # Get order
    let order = getOrder(tskValue);
    // # Check if exists or not?
    if (checkOrderExistence(order)) {
      return {
        result: true,
        order: order,
      };
    }
  }
  // ? Not order
  return {
    result: false,
  };
}

// # Check if order or not?
function isOrder(tskValue) {
  return tskValue.charAt(0) === "@" ? true : false;
}

// # Get order
function getOrder(tskValue) {
  // # Get required order
  return tskValue.split(" ")[0].slice(1, tskValue.length);
}

// # Check existence of order if exists or not?
function checkOrderExistence(order) {
  return searchOrders.includes(order);
}

// # Excutes the order
function executesSearchOrder(order) {
  // # Hide `search_results`
  Helpers().hideSearchResult;
  // # About order?
  switch (order) {
    case "All":
      allOrder().displayAllTasks;
      break;
    case "Previous":
      previousOrder().displayAllPreviousTasks;
      break;
    case "Today":
      currentOrder().displayCurrentTasks;
      break;
    case "Now":
      console.log("Now");
      runOrder.displayAllRunTasks();
      break;
    case "Date":
      dateOrder.displaySpecificDate();
      break;
    case "Days":
      console.log("All Days");
      daysOrder.displayAllExistedDays();
      break;
    case "Done":
      console.log("Done Tasks");
      doneOrder.displayAllDoneTasks();
      break;
    case "Delay":
      console.log("Delay Tasks");
      delayOrder.displayAllDelayedTasks();
      break;
    case "Group_":
      // console.log(`${order}`);
      renderSpecifiedTaskBGroup();
      break;
    default:
      return false;
  }
}
=======
// # All orders of Search
let searchOrders = [
  "All",
  "Previous",
  "Today",
  "Now",
  "Date",
  "Group",
  "Days",
  "Done",
  "Delay",
  "Group_",
  // # Make new group
];

// # Check if order & exists or not?
function isExistsSearchOrder(tskValue) {
  // # Check order or not?
  if (isOrder(tskValue)) {
    // # Get order
    let order = getOrder(tskValue);
    // # Check if exists or not?
    if (checkOrderExistence(order)) {
      return {
        result: true,
        order: order,
      };
    }
  }
  // ? Not order
  return {
    result: false,
  };
}

// # Check if order or not?
function isOrder(tskValue) {
  return tskValue.charAt(0) === "@" ? true : false;
}

// # Get order
function getOrder(tskValue) {
  // # Get required order
  return tskValue.split(" ")[0].slice(1, tskValue.length);
}

// # Check existence of order if exists or not?
function checkOrderExistence(order) {
  return searchOrders.includes(order);
}

// # Excutes the order
function executesSearchOrder(order) {
  // # Hide `search_results`
  Helpers().hideSearchResult;
  // # About order?
  switch (order) {
    case "All":
      allOrder().displayAllTasks;
      break;
    case "Previous":
      previousOrder().displayAllPreviousTasks;
      break;
    case "Today":
      currentOrder().displayCurrentTasks;
      break;
    case "Now":
      console.log("Now");
      runOrder.displayAllRunTasks();
      break;
    case "Date":
      dateOrder.displaySpecificDate();
      break;
    case "Days":
      console.log("All Days");
      daysOrder.displayAllExistedDays();
      break;
    case "Done":
      console.log("Done Tasks");
      doneOrder.displayAllDoneTasks();
      break;
    case "Delay":
      console.log("Delay Tasks");
      delayOrder.displayAllDelayedTasks();
      break;
    case "Group_":
      // console.log(`${order}`);
      renderSpecifiedTaskBGroup();
      break;
    default:
      return false;
  }
}
>>>>>>> c38ad0feeb1a8ad2530477d68239c02ed71aecdd
