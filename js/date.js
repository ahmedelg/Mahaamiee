<<<<<<< HEAD

// RTRN CURRENT OR MEAN DATE
let dateCmp = {};
dateCmp.getCurrentDate = () => {
	return new Date().toString().slice(0, 15);
	// return new Date().toDateString();
	// return new Date().toLocaleString();
};

// SRCH F NEW DATE
dateCmp.findDate = (newDate) => {
	//	GET ALL-TASKs
	const ALL_TASKs = tasksDom.stack.querySelectorAll('section');
	
=======

// RTRN CURRENT OR MEAN DATE
let dateCmp = {};
dateCmp.getCurrentDate = () => {
	return new Date().toString().slice(0, 15);
	// return new Date().toDateString();
	// return new Date().toLocaleString();
};

// SRCH F NEW DATE
dateCmp.findDate = (newDate) => {
	//	GET ALL-TASKs
	const ALL_TASKs = tasksDom.stack.querySelectorAll('section');
	
>>>>>>> c38ad0feeb1a8ad2530477d68239c02ed71aecdd
}