
function changeColor(ev){
    let bodyColor = prompt('color of body?')
	let div = document.getElementById('div');
	document.body.style.backgroundColor = bodyColor;
	if(document.body.style.backgroundColor == 'black'){
		div.style.color = "#fff";
	}else{
		div.style.color = "#000"; 
	}
}
function changeTextColor(ev){
    let h1Text = document.getElementById('zagolovok');
    let textColor = prompt('color of header text?')
	h1Text.style.color = textColor;
}
function changeTextSize(ev){
    let pText = document.getElementById('regularText');
    let textSize = prompt('size of (p) text?')
	pText.style.fontSize = textSize + 'px';
}
function addNewLi(ev){
    let olList = document.getElementById('Spisok');
	let li = document.createElement('li');
	li.innerHTML = prompt('New list?')
	olList.append( li); //Все круто. но у меня не получается взять в кавычки ввод с промпта. Если добавить обычным способом: '\"'+li+'\"' или `\" ${li.toString()} \" ` вывод объект! Я с другой стороны могу обратиться `\" ${JSON.stringify(li.innerHTML)} \"` но тогда эта лишка не считается
}

let buttonForBackgrnd = document.getElementById('BtnColor');
buttonForBackgrnd.onclick = changeColor;

let buttonForH1Text = document.getElementById('BtnH1TextColor');
buttonForH1Text.onclick = changeTextColor;

let buttonForPText = document.getElementById('BtnPTextSize');
buttonForPText.onclick = changeTextSize;

let buttonForLi = document.getElementById('BtnForAddNewLi');
buttonForLi.onclick = addNewLi;