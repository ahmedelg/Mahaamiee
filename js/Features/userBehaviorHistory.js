class UserBehaviorHistory {

  constructor() {
    this.userBehaviorHistory = new Array();
    this.undoedActions = new Array();
    if (!UserBehaviorHistory.userBehaviorObj) {
      UserBehaviorHistory.userBehaviorObj = this;
    }
    return UserBehaviorHistory.userBehaviorObj;
  }

  storeNewAction(newAction) {
    this.userBehaviorHistory.push(newAction);
  }

  addTundoedActions(undoedAction) {
    this.undoedActions.push(undoedAction);
  }

  getInfoFSpecTask(task) {
    
  }

  




}

const userBehaviorHistory = Object.seal(new UserBehaviorHistory());

