export function drawPieChart(data, canvas) {
    const ctx = canvas.getContext('2d');
  
    // Общая сумма значений для подсчета процентов
    const totalVal = data.reduce((acc, item) => acc + parseInt(item[1], 10), 0);
  
    // угол для каждого сектора диаграммы
    let startAngle = 0;
    let trows = document.querySelectorAll("tr");
    let color;
    
    data.forEach((item) => {
        const val = parseInt(item[1], 10);
        const sliceAngle = (val / totalVal) * 2 * Math.PI;
  
        // Отрисовываю сектор диаграммы
        color = getRandomColor();
        item.color = color;
        
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, 70, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();

        // Обновляю начальный угол для следующего сектора
        startAngle += sliceAngle;
    });
    
    // Изменяем цвет строки таблицы соответствующий каждому элементу массива data
    data.forEach((item, i) => {
        trows[i].style.color = item.color;
    });
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

