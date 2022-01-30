class GroupDbAPI {
  extractGroupsFTask(tsk) {
    // +1 Fetch groups F task
    const taskGroups = this.TASK_GROUPs(tsk); // .. not undefined / null
    let FoundGroups = [];
    if (taskGroups !== undefined) {
      // Extract all `groups` F `task`
      taskGroups.forEach((group) => {
        FoundGroups.push(group.textContent);
      });
    }
    return FoundGroups; // {'group1', 'group2'};
  }
  TASK_GROUPs(tsk) {
    const taskGroups = tsk.querySelector(".task-groups");
    if (taskGroups) return taskGroups.querySelectorAll(".group-address");
    // querySelectorAll('group-address');
  }
  addTaskGroups(taskGroups) {
    // Check `task` doesn't has `groups`? ..undefined..
    if (!taskGroups) {
      return null;
    }
    const READY_TASK_GROUPs_CNTR = this.createTaskGroupsCntr();
    taskGroups.forEach(group => {
      READY_TASK_GROUPs_CNTR.append(this.createTaskGroupVlCntr(group));
    });
    // return ready task's groups container
    return READY_TASK_GROUPs_CNTR;
  }

  createTaskGroupsCntr() {
    const groupCntr = document.createElement("div");
    groupCntr.classList.add(ENV_GROUP.groupCntrClass);
    return groupCntr;
  }
  createTaskGroupVlCntr(grVl) {
    let span = document.createElement("span");
    span.classList.add("group-address");
    span.textContent = grVl;
    return span;
  }
}
const groupDbAPI = Object.seal(new GroupDbAPI());
