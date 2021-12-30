// TaskCounterAPI >> API between `Task Functions` & `Counter Class`
const TaskCounterAPI = {
  counters: new Array(),
  // -> define available options
  getAvailableOptions(state) {
    switch (state) {
      case 'not-exist':
        return ['00:00', 'run'];
      case 'run':
        return ['stop', 'restart', 'delete'];
      case 'stop':
        return ['continue', 'restart', 'delete'];
      default:
        return ['none'];
    };
  },
  // ------------------
  // .>> define `required-options` 
  // .>> render it
  handleTaskCounter({ state, task }) {
    this.task = task;
    this.renderCounterOptionsCntr(this.defineCounterOptions(state));
  },
  // ------------------
  defineCounterOptions(state) {
    return this.getAvailableOptions(state);
  },
  // ------------------
  // -> display available options for task
  renderCounterOptionsCntr(relatedOptions) {
    const optionsCntr = document.createElement("div");
    optionsCntr.classList.add("counter-options");
    relatedOptions.forEach(option =>
      optionsCntr.append(this.createOption(option)));
    // .>> render `options` to task
    this.addTaskOptions(optionsCntr);
  },
  // ------------------
  // .>> create option
  // .>> add `required listerners` for option
  createOption(option) {
    const sharedCode = ({
      optionClass,
      option
    }) => {
      let p = document.createElement('p');
      p.classList.add(optionClass);
      p.textContent = option;
      // -> handle listeners for option
      p = this.handleListeners({ element: p, option: option });
      return p;
    };
    switch (option) {
      case '00:00':
        let input = document.createElement('input');
        input.classList.add('counter-value');
        input.value = '00:00';
        input = this.handleListeners({ element: input, option: option });
        return input;
      case 'run':
        return sharedCode({
          optionClass: 'run-counter',
          option: option
        });
        break;
      case 'stop':
        return sharedCode({
          optionClass: 'stop-counter',
          option: option
        });
        break;
      case 'restart':
        return sharedCode({
          optionClass: 'restart-counter',
          option: option
        });
      case 'continue':
        return sharedCode({
          optionClass: 'continue-counter',
          option: option
        });
      case 'delete':
        return sharedCode({
          optionClass: 'delete-counter',
          option: option
        });
      default:
        const p = document.createElement('p');
        p.textContent = "none";
        return p;
    };
  },
  handleListeners({
    element,
    option
  }) {
    switch (option) {
      case '00:00':
        // -> There is no listeners
        element = this.changeCounterVlListener(element);
        break;
      case 'run':
        element = this.runCounterListener(element);
        break;
      case 'stop':
        element = this.stopCounterListener(element);
        break;
      case 'restart':
        element = this.restartCounterListener(element);
        break;
      case 'continue':
       	element=this.continueCounterListener(element);
        break;
      case 'delete':
      
        break;
      default:
        const p = document.createElement('p');
        p.textContent = "none";
        return p;
    };
    return element;
  },
  addTaskOptions(relatedOptionsCnt) {
    // .>> add `relatedOptionsCnt` in task
    this.getTaskCounter().append(relatedOptionsCnt);
  },
  // -> change counter value > become `defined` not default
  changeCounterVlListener(element) {
    // update `task-state`
    element.addEventListener('change', (e) => {
      this.updateTaskCounterVl(element.value);
    });
    return element;
  },
  updateTaskCounterVl(newCounterValue) {
    this.getTaskCounter().setAttribute('counter-value', newCounterValue);
  },
  getTaskCounter() {
    return this.task.querySelector(".task-counter");
  },
  runCounterListener(element) {
    element.addEventListener('click', (e) => {
      let counterElement = element.parentElement.parentElement;
      this.updateState(counterElement, 'run');
      let newCounter = this.addCounterInTask(counterElement, element);
      // this.createCounter(counterElement);

      // .>> register `counter`
      this.registerCounter(OptionsHelpers.getTask(counterElement), newCounter);
      // .>> remove `options-cntr`
      OptionsHelpers.removeOptions(counterElement);
    });
    return element;
  },
  registerCounter(task, counter) {
    let newTaskCounter = {
      counterState: 'run',
      counterValue: task.querySelector('.counter-value').value,
      counter: counter,
      task: task
    };
    // .>> add `newTaskCounter`
    this.counters.push(newTaskCounter);
    this.registerTask(this.counters.length - 1, task);
  },
  registerTask(counterSlot, task) {
    task.setAttribute('counter-index', counterSlot);
  },
  updateState(element, newState) {
    element.setAttribute('counter-state', newState);
  },
  // .>> add counter as a group
  addCounterInTask(counterElement, element) {
    // .>> update task in group
    const task = OptionsHelpers.getTask(counterElement);
    // .>> add `counter` in task
    // .>> check `task-groups` .append()`exists` or `not`?
    if (!task.querySelector('.task-groups')) {
      // ? `not-exist`
      // -> create `task-groups`
      let taskGroupsCntr = document.createElement('div');
      taskGroupsCntr.classList.add('task-groups');
      task.append(taskGroupsCntr);
    }
    let counterItem = this.createCounterElement(counterElement);
    task.querySelector('.task-groups').append(counterItem);
    // .>> start `counter`
    return this.startCounter(counterItem);
  },
  createCounterElement(counterElement) {
    let span = document.createElement('span');
    `group-address`
    span.classList.add('group-address', 'run-counter');
    span.classList.add('group-address', 'counter-item');
    span.textContent = counterElement.getAttribute('counter-value');
    return span;
  },
  startCounter(counterItem) {
    // .>> handle `minutes` and `seconds`
    let timer = this.handleCounter(counterItem);
    const newCounter = setInterval(() => {
      if (timer.seconds === 0) {
        if (timer.minutes === 0)
          this.warnCounter(counterItem);
        timer.minutes--; // take `minute`
        timer.seconds = 60; // change `minute` into `seconds`
      }
      timer.seconds--;
      // .>> update counter
      counterItem.textContent = `${timer.minutes}:${timer.seconds}`;
    }, 1000); // .>> each second
    // console.log(counter); // .>> newCounter represented as a number
    return newCounter;
  },
  handleCounter(counterItem) {
    let counter = counterItem.textContent.split(':');
    return {
      minutes: +counter[0],
      seconds: +counter[1],
    }
  },
  warnCounter(counterItem) {
    counterItem.classList.remove('run-counter');
    counterItem.classList.add('warn-counter');
  },
	getTaskCounterElement(element){
		return OptionsHelpers.getTask(this.getTaskCounter(element));
	},
  stopCounterListener(element) {
    element.addEventListener('click', (e) => {
      let counterElement = this.getTaskCounter(element);
      let tskFElmnt = OptionsHelpers.getTask(counterElement);
      let counterSlot = this.getCounterSlot(tskFElmnt);
      // .>> stop counter
      clearInterval(this.counters[counterSlot].counter);
      // .>> remove `options-cntr`
      OptionsHelpers.removeOptions(counterElement);
      // .>> update `taskCounterState`
      this.updateCounterState(counterSlot, 'stop');
      this.handleStopCounterItemStyle(this.getTaskCounterItem(tskFElmnt));
    })
    return element;
  },
  getCounterSlot(task) {
    return task.getAttribute('counter-index');
  },
  updateCounterState(counterSlot, newState) {
    this.counters[counterSlot].counterState = newState;
  },
  handleStopCounterItemStyle(counterItem) {
    counterItem.classList.add('stop-counter-item');
  },
  getTaskCounterItem(tskFElmnt) {
    return tskFElmnt.querySelector('.counter-item');
  },
  restartCounterListener(element) {
    element.addEventListener('click',(e)=>{
      this.ContinueRestartCounterListener(element, false);
		})
		return element;
  },
  deleteCounterListener(element) {
    // -> stop counter is going to another world :dies
    // -> remove counter from `counters` archieve
    
  },
  continueCounterListener(element) {
    element.addEventListener('click',(e)=>{
      this.ContinueRestartCounterListener(element, true);
		})
		return element;
  },
	ContinueRestartCounterListener(element, isContinue){
    let task = this.getTaskCounterElement(element);
    let counterSlot = this.getCounterSlot(task);
    let taskCounterItem = this.getTaskCounterItem(task);
    // -> check if it's `restartCounter`
    if (!isContinue) {
      // ? restart
      // -> Make sure `oldInterval` is `stoped`
      clearInterval(TaskCounterAPI.counters[counterSlot].counter);
      // .>> must start from `first-value` of counter
      taskCounterItem.textContent = TaskCounterAPI.counters[counterSlot].counterValue;
    }
    // .>> create new interval
    let newCounter=this.startCounter(taskCounterItem);
    // .>> replace old interval with new interval
    this.replaceCounter(counterSlot, newCounter);
    let counterElement = this.getTaskCounter(element);
    // .>> remove `options-cntr`
    OptionsHelpers.removeOptions(counterElement);
    // .>> update `taskCounterState`
    this.updateCounterState(counterSlot, 'run');
  },
	CURRENT_COUNTER_VALUE(tsk){
		return this.getTaskCounterItem(task).textContent;
	},
	replaceCounter(counterSlot, newCounter){
		TaskCounterAPI.counters[counterSlot].counter=newCounter;
	}
} // End (+OBJ) TaskCounterAPI.
// Object.freeze(TaskCounterAPI); // will make a problem...
// Cause of run time processes executed...