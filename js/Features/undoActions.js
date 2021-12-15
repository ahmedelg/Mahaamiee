class UndoActions {
  constructor(actionsMap) {
    this.actionsMap = actionsMap;
    if (!UndoActions.undoActions) {
      UndoActions.undoActions = this;
    }
    return UndoActions.undoActions;
  }

  removeUndoedAction(actionIndex, latestAction) {
    // console.log('action has been removed...')
    try {
       // Add to undoed actions
      userBehaviorHistory.addTundoedActions(latestAction);
      userBehaviorHistory.userBehaviorHistory.splice(actionIndex, 1);
      return true;
    } catch (e) {
      return e;
    }
  }

  undoNewTask() {}

  undoRemoveTask() {}

  undoCurrentTask(latestAction, actionIndex) {
    OptionsHelpers.toggleCurrentState(null, latestAction.taskState.element);
    // # Remove undo action
    this.removeUndoedAction(actionIndex, latestAction);
  }
} // End {+} UndoActions
const actionsMap = {
  newTask: {},
  removeTask: {},
};
const actionUndo = Object.seal(new UndoActions(actionsMap));
window.addEventListener("keydown", (vnt) => {
  // console.log(vnt);
  if (vnt.ctrlKey && (vnt.key == "z" || vnt.key == "Z")) {
    // Get latest action
    const userActions = userBehaviorHistory.userBehaviorHistory,
      latestAction = userActions[userActions.length - 1];
    if (!latestAction)
      return 0;
    // console.log(latestAction);
    switch (latestAction.actionState.actionType) {
      case "current":
        actionUndo.undoCurrentTask(
          latestAction,
          (actionIndex = userActions.length - 1)
        );
        break;
    }
  }
  return;
});
