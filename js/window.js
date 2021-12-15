window.addEventListener('click', () => {
  const taskOptions = document.querySelector('.options-container');
  if (taskOptions){
	if(!event.target.classList.contains('task-container')
    		taskOptions.remove();
  }
})

// window.onbeforeunload = (vnt) => {
//   return alert("are u sure?");
// }


// window.onload = (vnt) => {  alert("load......")}

// jQuery(window).bind(
//   "beforeunload", 
//   function() { 
//       return confirm("Do you really want to close?") 
//   }
// )
