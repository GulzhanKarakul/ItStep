const saturationLevels = 10;
const lightnessLevels = 10;

function hsl(hue, saturation, lightness) {
	return `hsl(${hue} ${saturation}% ${lightness}%)`;
}
//function to set Saruration and Lightness
function changeSaturationAndLightness(){
    let saturation = document.getElementById('saturation').value;
    let lightness = document.getElementById('lightness').value;
    let cells = tableTwo.getElementsByTagName("td");
		
	let color = 0;
	for(let i=0; i < 10; i++){
		cells[i].style.backgroundColor = `hsl(${color} ${saturation}% ${lightness}%)`;
		color += 36;
	}
}

// function to show your color
function yourColor(event){
    let yourColor = document.getElementById('current-color');
	yourColor.style.backgroundColor = event.target.style.backgroundColor;
}

let tableTwo = document.getElementById('palette');
let row = "<td></td>".repeat(lightnessLevels);
let tableContent = `<tr>${row}</tr>`;
tableTwo.innerHTML = tableContent;
tableTwo.onclick = yourColor;

let rowSaturation = document.getElementById('saturation');
rowSaturation.oninput = changeSaturationAndLightness;
let deltaLightness = document.getElementById('lightness');
deltaLightness.oninput = changeSaturationAndLightness;