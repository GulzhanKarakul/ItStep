let btn =document.getElementById('start');
let table = document.getElementById('table');

function mixElments(){
let tr = document.querySelectorAll('tr'); 
let uniqValues =[];
	for(let r=0;r<4;r++){		
		for(let c=0;c<4;c++){
			if(tr[r].childNodes[c].classList.contains("empty")) continue;
			let b;
			do{
				b = getRandom(1,16);
			}
			while(uniqValues.indexOf(b) !== -1);
			tr[r].childNodes[c].textContent = b;
			uniqValues.push(b);	
		}
	}		
}

function getRandom(min,max){
	let a =Math.floor( Math.random() * (max-min) + min);
	return a;
}


function changePosition(ev){
	let elemTar = ev.target; 
	let elemRow = elemTar.parentElement;
	
	let row = elemRow.rowIndex;
	let col = elemTar.cellIndex;
	let emptyCell;

	// условие для перемещения фишки вправо
	if(elemTar.nextSibling && elemTar.nextSibling.classList.contains("empty")) {
		emptyCell = elemTar.nextSibling;
		elemTar.replaceWith(emptyCell);
		emptyCell.after(elemTar);
	  } else
	// условие для перемещения фишки влево
	  if(elemTar.previousSibling && elemTar.previousSibling.classList.contains("empty")) {
		emptyCell = elemTar.previousSibling;
		elemTar.replaceWith(emptyCell);
		emptyCell.before(elemTar);
	  } else
	// условие для перемещения фишки вниз
	  if(elemRow.nextElementSibling && elemRow.nextElementSibling.children[col].classList.contains("empty")) {
		emptyCell = elemRow.nextElementSibling.children[col];
		let tmp = document.createElement('td');
		elemTar.after(tmp);
		emptyCell.replaceWith(elemTar);
		tmp.replaceWith(emptyCell);
		//elemRow.nextElementSibling.children[col-1].after(elemTar);
		//              тут есть проблема: ^^^^^^^
		//emptyCell.replaceWith(elemTar);
		//table.rows[row].cells[col].before(emptyCell);
		//Я создала таблицу и двигала каждую плитку через консоль. по сути это должно сработать, но когда я поменяла в Вашем коде
		//1-2 круга вверх-вниз работает, но после плитки удаляются... Я ВООБЩЕ не понимаю почему так, логически ведь верно все
		// Итог: пришлось загуглить как другие пишут. Оказалось все намного проще... 
		//Любимый вопрос для айтишников, как поменять стаканами воду и сок
		}
	 else
	// условие для перемещения фишки вверх
	if(elemRow.previousElementSibling && elemRow.previousElementSibling.children[col].classList.contains("empty")) {
		emptyCell = elemRow.previousElementSibling.children[col];
		let tmp = document.createElement('td');
		elemTar.after(tmp);
		emptyCell.replaceWith(elemTar);
		tmp.replaceWith(emptyCell);
	}
	checkGameOver();
}

function checkGameOver() {
	let tr = document.querySelectorAll('tr');
	let counter = 1;
	for (let r = 0; r < 4; r++) {
	    for (let c = 0; c < 4; c++) {
		    if (r === 3 && c === 3) {
		        break;
		    }
		    if (table.rows[r].cells[c].textContent != counter) {
		        return;
		    }
		    counter++;
	    }
	}
	modalWindow();
}

function modalWindow(){
	let baseDiv = document.createElement('div');
    baseDiv.className = 'osnova';
    let alert = document.createElement('div');
    alert.className = 'alert';
    alert.innerHTML = '<h1> Поздравляю!!!</h1> <h3>Вы Выиграли!</h3>';
	
	let buttonPlayAgain = document.createElement('button');
    buttonPlayAgain.textContent = "Начать игру заново"
    buttonPlayAgain.className = 'btn';
	alert.append(buttonPlayAgain);

	let buttonExit = document.createElement('button');
    buttonExit.textContent = "Выйти";
    buttonExit.className = 'exit';
    buttonExit.classList.add('btn');
	alert.append(buttonExit);

	baseDiv.append(alert);
	document.body.appendChild(baseDiv);

	buttonExit.addEventListener('click', () => {
		baseDiv.remove();
	})

	buttonPlayAgain.addEventListener('click', () => {
		baseDiv.remove();
		mixElments();
	})
}

table.onclick = changePosition;

btn.onclick = mixElments;
