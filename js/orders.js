// function main() {
// 	let welcomeMessage = 'Welcome back mister student';
// 	readOutLoud(welcomeMessage);
// }

// const NEW_RECOGNITION = initRecognition();
// NEW_RECOGNITION.onresult = function(event) {
//   var current = event.resultIndex;

//   var transcript = event.results[current][0].transcript;

//   var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
//   if(!mobileRepeatBug) {
//   	console.log(transcript)
//     if(transcript.trim() === 'task') {
//     	NEW_RECOGNITION.stop();
//     	responseNewTaskOrder();
//     }
//   }
// };

// // Response of new-task order
// function responseNewTaskOrder() {
// 	message = 'What is the name of new task';
// 	readOutLoud(message);
// 	NEW_RECOGNITION.start()
// 	console.log(NEW_RECOGNITION.start())
// }

// NEW_RECOGNITION.onstart = () => {
// 	let message = 'What do you want?';
// 	readOutLoud(message);
// 	// setTimeout(() => {
// 	// 	NEW_RECOGNITION.stop()
// 	// },3000)
// }

// NEW_RECOGNITION.onspeechend = function() {
// 	console.log('Recognition has been stoped...')
// 	this.stop();
// }

// NEW_RECOGNITION.onerror = function(event) {
//   if(event.error == 'no-speech') {
//     alert('No speech was detected. Try again.');
//   };
// }

// // Handle Order Listener
// let orderBtn = document.getElementById('orderBtn');
// orderBtn.addEventListener('click', (event) => {
// 	NEW_RECOGNITION.start()
// })

// // Create Recognition
// function initRecognition () {
// 	try {
// 		var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// 		var recognition = new SpeechRecognition();
// 	} catch(e) {
// 		alert("recognition doesn't Support by browser")
// 		return false;
// 	}
// 	// Recognition Settings
// 	recognition.continuous = true;
// 	return recognition;
// }

// // Read Out Loud A Message
// function readOutLoud (message) {
// 	var speech = new SpeechSynthesisUtterance();
// 	// Settings
// 	speech.text = message;
// 	speech.volume = 1;
// 	speech.rate = 1;
// 	speech.pitch = 1;

// 	window.speechSynthesis.speak(speech); }


// setTimeout( () => {
// 	main()
// }, 2000);


