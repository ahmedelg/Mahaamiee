let Division = (() => {
  let openStyle = (cntrlBtn) => {
    cntrlBtn.classList.add("opened");
  };
  
  let closeStyle = (cntrlBtn) => {
    cntrlBtn.classList.remove("opened");
  };
  
  // # Open division
  let openDivision = (cnt, cntrlBtn) => {
    cnt.classList.remove("closed-division");
    openStyle(cntrlBtn);
    // return divn.style.display = "block";
  };
  
  // # Close division
  let closeDisvision = (cnt, cntrlBtn) => {
    cnt.classList.add("closed-division");
    closeStyle(cntrlBtn)
  };
  
  return {
    open: openDivision,
    close: closeDisvision
  };
})();

let allDivisions = document.querySelectorAll(".division-item");

allDivisions.forEach((e) => {
  e.addEventListener("click", (event) => {
    // Get element to display or hide
    let dv = event.target,
      // Get division's content to be displayed or hidden
      dvCnt = dv.parentElement.querySelector("div");
      
    // Check if open
    if (dvCnt.classList.contains("closed-division")) {
      Division.open(dvCnt, dv);
    } else {
      Division.close(dvCnt, dv);
    };
    
    // if (dvCnt.classList.contains("closed-division")) {
    //   dvCnt.classList.remove("closed-division"); // Becomes opened
    //   return dvCnt.style.display = "block";
    // }
    // dvCnt.classList.add("closed-division"); // Bocomes closed 
    // // Check open or not?
    // if (dv.classList.contains("closed-division")) {
    //   // ? closed
    //   // # Open division
    //   dvCnt.style.display = "block";
    //   // # Remove close-state
    //   dv.classList.remove("closed-division");
    // } else {
    //   // ? Opend
    //   dv.classList.add("closed-division");
    //   dvCnt.style.display = "none";
    // }
  });
});
