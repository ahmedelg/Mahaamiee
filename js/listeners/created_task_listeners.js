CREATED_TASK_INPUT.onchange = (e) => {
  // # Get value
  let vl = e.target.textContent;
  let span = document.createElement("span");
  span.textContent = vl;
  e.target.innerHTML = span;
  // console.log(vl)
  // for (let i in keys) { 
  //   if (vl === keys[i]) { 
  //     document
  //   };
  // };
};

Keys = ["@", "Days"];