<<<<<<< HEAD
const taslFeatures = [
  "@Now",
  "@Today",
  "@Dates",
  "@All",
  "@Previous",
  "@Days",
  "@Group_ group_name",
  "@Date specific_date"
]; //2 >index: 1
let currIndex = -1; // 0

// const scrollTaskOptions = (event) => {
//   // event.preventDefault();
//   console.log(event.target);
//   console.log("scroll triggered!");
// };
CREATED_TASK_INPUT.onkeydown = (vnt) => {
  // console.log(vnt)
  if (vnt.code == "ArrowUp") {
    // check last-index
    if (currIndex == taslFeatures.length - 1) {
      // 2
      // begins from start
      currIndex = 0;
    } else {
      // get next
      currIndex++; // currIndex: 1
    }
    vnt.target.value = taslFeatures[currIndex];
    vnt.target.style.color = "green";
    vnt.target.style.fontWeight = "bold";
  } else if (vnt.code == "ArrowDown") {
    if (currIndex == 0 || currIndex==-1) {
      currIndex = taslFeatures.length - 1;
    } else {
      currIndex--;
    }
    vnt.target.value = taslFeatures[currIndex];
    vnt.target.style.color = "green";
    vnt.target.style.fontWeight = "bold";
  } else {
    vnt.target.style.color = "#000";
    vnt.target.style.fontWeight = "normal";
  }
  return;
};
=======
const taslFeatures = [
  "@Now",
  "@Today",
  "@Dates",
  "@All",
  "@Previous",
  "@Days",
  "@Group_ group_name",
  "@Date specific_date"
]; //2 >index: 1
let currIndex = -1; // 0

// const scrollTaskOptions = (event) => {
//   // event.preventDefault();
//   console.log(event.target);
//   console.log("scroll triggered!");
// };
CREATED_TASK_INPUT.onkeydown = (vnt) => {
  // console.log(vnt)
  if (vnt.code == "ArrowUp") {
    // check last-index
    if (currIndex == taslFeatures.length - 1) {
      // 2
      // begins from start
      currIndex = 0;
    } else {
      // get next
      currIndex++; // currIndex: 1
    }
    vnt.target.value = taslFeatures[currIndex];
    vnt.target.style.color = "green";
    vnt.target.style.fontWeight = "bold";
  } else if (vnt.code == "ArrowDown") {
    if (currIndex == 0 || currIndex==-1) {
      currIndex = taslFeatures.length - 1;
    } else {
      currIndex--;
    }
    vnt.target.value = taslFeatures[currIndex];
    vnt.target.style.color = "green";
    vnt.target.style.fontWeight = "bold";
  } else {
    vnt.target.style.color = "#000";
    vnt.target.style.fontWeight = "normal";
  }
  return;
};
>>>>>>> c38ad0feeb1a8ad2530477d68239c02ed71aecdd
