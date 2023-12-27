const votes = {
    "страшила": 0,
    "лев": 0,
    "железный дровосек": 0,
};

let chooseFileBtn = document.querySelector('.chooseFile');
let inputDownload = document.getElementById('fileinput');

chooseFileBtn.onclick = () => inputDownload.click();

let countVotesBtn = document.getElementById('safe');

oninput = (ev) =>{
    let files = inputDownload.files;
    for (let file of files){
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = getReadedText.bind(reader);
        //bind = делает переданный объект в функцию в свмой функции this!!!
        //onload - означает что file прочтен и выдает результат reader.readAsText(file);
    }
}

countVotesBtn.addEventListener('click', () => {
    let winner = 0;
    let winnerName;
    let message='';
    
    for(let key in votes){
        if(winner < votes[key]){
            winner = votes[key];
            winnerName = key;
        }
        message += `<p>${key[0].toUpperCase() + key.slice(1)}: ${votes[key]} </p>`;
    }
    modalWindow(`${message} <h3> В голосовании победил: ${winnerName[0].toUpperCase() + winnerName.slice(1)}</h3><h1> Поздравляю!!!</h1>`);
})

function getReadedText(ev) {
    let text = this.result;
    text = text.toLowerCase();

    for( let key in votes){
        if(key === text.trim()){
            votes[key] += 1;
        }
    }
    console.log(votes);
}

function modalWindow(message){
	let baseDiv = document.createElement('div');
    baseDiv.className = 'osnova';
    let alert = document.createElement('div');
    alert.className = 'alert';
    alert.innerHTML = message;

	baseDiv.append(alert);
	document.body.appendChild(baseDiv);

    baseDiv.onclick = () => baseDiv.remove();
}
