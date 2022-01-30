let DAY = {};

DAY.createNewDay = (newDay= {date: 'none', tasks = []}) => {

	// CREATE DAY CNTR
	let dayCntr = document.createElement('div')
	day.classList.add('new-day')

	// CREATE DATE CNTR
	let dateCntr = document.createElement('div')
	dateCntr.classList.add('dateStr')
	dateCntr.id = newDay.date;

	// 
	let dateStr = document.createElement('div')
	dateStr.classList.add('dateStr')
	let line = document.createElement('hr')
	line.style.color = 'rebeccapurple'
	let dateCnt = document.createElement('p')
	dateCnt.textContent = newDay.date;

	dateStr.append(line)
	dateStr.append(dateCnt)
	dateStr.append(line)

	
}

