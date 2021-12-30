class RedoActions {
  constructor() {
    // this.actionsMap = actionsMap;
    if (!RedoActions.redoAction) {
      RedoActions.redoAction = this;
    }
    return RedoActions.redoAction;
  }

  removeUndoedActions(actionIndex) {
    try {
      userBehaviorHistory.userBehaviorHistory.push(
        userBehaviorHistory.undoedActions[actionIndex]
      );
      userBehaviorHistory.undoedActions.splice(actionIndex, 1);
      return 1;
    } catch (e) {
      return e;
    }
  }

  redoCurrentTask(latestAction, actionIndex) {
    OptionsHelpers.toggleCurrentState(null, latestAction.taskState.element);
    // remove action from undoed actions
    if (!this.removeUndoedActions(actionIndex))
      alert("there an error to redo the action");
  }
} // End [+] UndoActions

const actionRedo = Object.seal(new RedoActions());

window.addEventListener("keydown", (vnt) => {
  if (vnt.ctrlKey && (vnt.key == "y" || vnt.key == "Y")) {
    // console.log(userBehaviorHistory.undoedActions);
    const undoedActions = userBehaviorHistory.undoedActions,
      latestUndoedAction = undoedActions[undoedActions.length - 1];
    if (!latestUndoedAction) return 0;
    switch (latestUndoedAction.actionState.actionType) {
      case "current":
        actionRedo.redoCurrentTask(
          latestUndoedAction,
          (actionIndex = undoedActions.length - 1)
        );
        break;
    }
  }
  return;
});
