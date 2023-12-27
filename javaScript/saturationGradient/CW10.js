const saturationLevels = 10;
const lightnessLevels = 10;

function hsl(hue, saturation, lightness) {
	return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

function changeColor(event) {
	let hue = event.target.value;
	let palette = document.getElementById('palette');
	let rows = palette.getElementsByTagName("tr");

	let deltaSaturation = 100 / rows.length;
	for (let i in rows) {
		if (typeof rows[i] !== 'object') continue;
		let rowSaturation = i * deltaSaturation;
		let cells = rows[i].getElementsByTagName("td");;

		let deltaLightness = 100 / cells.length;
		for (let j in cells) {
			if (typeof cells[j] !== 'object') continue;
			let cellLightness = j * deltaLightness;
			cells[j].style.backgroundColor = hsl(hue, rowSaturation, cellLightness);
		}
	}
}
// function to show your color
function yourColor(event){
    let yourColor = document.getElementById('current-color');
	yourColor.style.backgroundColor = event.target.style.backgroundColor;
}

let table = document.getElementById('palette');
let row = "<td></td>".repeat(lightnessLevels);
let tableContent = `<tr>${row}</tr>`.repeat(saturationLevels) ;
table.innerHTML = tableContent;
table.onclick = yourColor;

let hue = document.getElementById('hue');
hue.oninput = changeColor;