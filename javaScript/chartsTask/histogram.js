export function drawHistogram(data, canvas) {
    const ctx = canvas.getContext('2d');

    // Максимальное значение для шкалы Y
    const maxVal = Math.max(...data.map((item) => parseInt(item[1], 10)));
  
    //ширина столбцов
    const barWidth = canvas.width / data.length;

    // Рисовка столбцов диаграммы
    data.forEach((item, i) => {
        let val = parseInt(item[1], 10);
        let barHeight = (val / maxVal) * canvas.height;
        let x = i * barWidth;
        let y = canvas.height - barHeight;
    
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(x, y, barWidth, barHeight);
    
        ctx.fillStyle = '#000';
        ctx.fillText(item[0], x + barWidth / 2, canvas.height - 5);
    });

}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}