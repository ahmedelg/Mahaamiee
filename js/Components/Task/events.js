let taskEvents = (() => { 
  // # conte
  let addContextMenuListener = (task) => {
    task.addEventListeners("contextmenu", (event) => {
      event.preventDefault();
      // # Show task-options
      console.log(task);
    });
    
    
    // # Show task's options
    let showOptions = (task) => {
    
    };
    
    
  };
  
  return {
    contextMenu: addContextMenuListener
  };
})();
// End!