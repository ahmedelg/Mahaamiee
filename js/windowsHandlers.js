// // DEFINE THE WINDOW DEFAULT SETTINGs & HANDLE IT
// let windowSettings = {};
// let defineWindowSettings = (() => {
//   // # SELECT `WIDTH` & `HEIGHT` F `CURRENT_CLIENT_WINDOW`
//   // Get width
//   const WINDOW_WIDTH = window.innerWidth,
//     // GFet height
//     WINDOW_HEIGHT = window.innerHeight;
//     console.log(WINDOW_HEIGHT, WINDOW_WIDTH);
    
//   // # Get `FULL_WINDOW` `CLASSEs`
//   const ALL_FULL_WINDOWs = document.querySelectorAll('.full-window');
//   let cnt = 0;
  
//   // # Handle `first` `full_window`
//   // ALL_FULL_WINDOWs[cnt].style.height = `${WINDOW_HEIGHT}px`;
//   // ALL_FULL_WINDOWs[cnt].style.width = `${WINDOW_WIDTH}px`;
//   // console.log(ALL_FULL_WINDOWs[cnt]);
  
//   const root = document.getElementById("root");
//   console.log(root)
//   root.style.height = `${WINDOW_HEIGHT}px`;
//   root.style.width = `${WINDOW_WIDTH}px`;
//   console.log(
//     `${document.body}`
//   )
  
//   // # Handle all `app_windows`
//   // while(cnt < ALL_FULL_WINDOWs.length){
//   //   // console.log(ALL_FULL_WINDOWs[cnt]); // <div class="full_window">
//   //   ALL_FULL_WINDOWs[cnt].style.height = `${WINDOW_HEIGHT}px`;
//   //   ALL_FULL_WINDOWs[cnt].style.width = `${WINDOW_WIDTH}px`;
//   //   cnt++;
//   // };

// })()

