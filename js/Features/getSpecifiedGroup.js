<<<<<<< HEAD
const renderSpecifiedTaskBGroup = (order) => {
  let { taskValue, getOrderRest, renderSpecTasks } = Helpers();
  const groupValue = getOrderRest(taskValue);
  let isGroup = inGroups(groupValue);
  if (isGroup.result) {
    renderSpecTasks(isGroup.result);
  } else {
    alert("there is no group with this value");
  }
};

const inGroups = (groupVl) => {
  const groups = group.groups;
  if (groups.length) {
    // Search about group value
    for (const i in groups) {
      if (groups[i].address === groupVl) return { result: [...groups[i].tasks] };
    }
  }
  return {
    result: false,
  };
};
=======
const renderSpecifiedTaskBGroup = (order) => {
  let { taskValue, getOrderRest, renderSpecTasks } = Helpers();
  const groupValue = getOrderRest(taskValue);
  let isGroup = inGroups(groupValue);
  if (isGroup.result) {
    renderSpecTasks(isGroup.result);
  } else {
    alert("there is no group with this value");
  }
};

const inGroups = (groupVl) => {
  const groups = group.groups;
  if (groups.length) {
    // Search about group value
    for (const i in groups) {
      if (groups[i].address === groupVl) return { result: [...groups[i].tasks] };
    }
  }
  return {
    result: false,
  };
};
>>>>>>> c38ad0feeb1a8ad2530477d68239c02ed71aecdd
