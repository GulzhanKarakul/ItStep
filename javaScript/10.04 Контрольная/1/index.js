function getRandom(min,max){
	let a =Math.floor( Math.random() * (max-min) + min);
	return a;
}

let div = document.querySelector('.kvadrat');
div.textContent = getRandom(0, 101);

div.addEventListener('wheel', (ev) =>{
    //div.textContent = getRandom(0, 101);
    let color = getRandom(0, 360);
    let lightness = getRandom(0, 100);
    let saturation = getRandom(0, 100);
    if(lightness < 50){
        div.style.color = 'white';
    }
    else {
        div.style.color = 'black';
    }
    div.style.backgroundColor = `hsl(${color} ${saturation}% ${lightness}%)`;

    if(ev.deltaY > 0){
        div.textContent -= 1;
    }
    else if(ev.deltaY < 0){
        div.textContent = +div.textContent + 1;
    }
})