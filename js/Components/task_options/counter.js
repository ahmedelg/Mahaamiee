class Counter {
  constructor() {
    if (!Counter.counter) {
      Counter.counter = this;
    };
    return Counter.counter;
  }
  // -> listener of `counter`
  counterListener(p) {
    this.task = OptionsHelpers.getTask(p);
    this.counterElement = p;
		// .>> `default state`
		let state=this.getDefaultCounterState();
    // .>> `isTaskHasCounter`
		const counterIndex=this.hasCounter(this.task);
		if (counterIndex)
			// .>> != null
			state=TaskCounterAPI.counters[counterIndex].counterState;
		// .>> 
    TaskCounterAPI.handleTaskCounter({
      state: state,
      task: this.task
    });
  }
  // -> return default-state of counter
  getDefaultCounterState() {
    return 'not-exist';
  }
  
  hasCounter(task){
		return task.getAttribute('counter-index');
  }

  startCounter(counterItem) {
    startCounterTaken();
  }

  registerNewCounter() {
    // .>> store task 'counter-index' f task itself better
  }

  startCounterTaken() {
    createCounter()
  }
 
  startCounterUp() {

  }

  defineCounterType() {

  }

  updateCounterState(newState) {

  }

}// End [+] Counter.

const counter = new Counter();