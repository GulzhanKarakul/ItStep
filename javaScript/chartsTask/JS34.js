//Петр, я сделала две первые диаграммы... У меня есть некоторые проблемы, когда добавляю новые цвета в 
//Круглой диарамме то, не всегда все коректно выходит... Буду благодарна если вдруг ты поймешь как можно исправить. 
//И сори что написала все через класс, а не в самом HTML. У меня проблемки с классами, поэтому я себя заставляю писать 
//именно их в домашках, чтобы лучше понять...

import { drawPieChart } from "./pieDiagram.js";
import { drawHistogram } from "./histogram.js";

function modalWindow(message){
    let alert = document.createElement('div');
    alert.className = 'alert';
    alert.innerHTML = message;

	document.body.appendChild(alert);

    let buttonExit = document.createElement('button');
    buttonExit.textContent = "Закрыть"
    buttonExit.classList.add('btn');
    alert.append(buttonExit);

    buttonExit.addEventListener('click', () => {
      alert.remove();
    })
}

class DiagramForTableValues {
    head = [];
    data = [];
    diagramms = {histogram: 'Гистограмма', pie: 'Круговая', doughnut: 'Кольцевая', line: 'График'};
    #tbody = null;

    constructor(){
        //Сначала создаю основной контейнер для таблицы и канваса
        this.cont = document.createElement('div');
        this.cont.className = 'cont';
        let hOne = document.createElement('h1');
        hOne.textContent  = 'Создание диаграмм на основе ваших данных';
        this.cont.append(hOne);

        //Теперь создаю див с таблицей
        this.tableDiv = document.createElement('div');
        this.tableDiv.className = 'baseForTable';

        //Создаю таблицу
        this.table = document.createElement('table');
        this.table.className = 'myTable';
        this.tableDiv.append(this.table);

        //Создаю thead и пушу в таблицу
        let thead = document.createElement('thead');
        thead.className = 'header';
        this.table.append(thead);

        //Создаю th для thead 
        for(let i in arguments) {
            this.head[i] = arguments[i];
            let th = document.createElement('th');
            th.textContent = String(this.head[i]);
            thead.append(th);
        }

        //
        this.#tbody = document.createElement('tbody');
		this.table.append(this.#tbody);

        //добавляю форму для добавления нового контакта
        let form = document.createElement('form');
        form.className = 'inputform';
        this.tableDiv.append(form );

        //Создаю инпуты для каждого аргумента
        for(let i in arguments){
            let lable = document.createElement('lable');
            lable.textContent = arguments[i];
            form.append(lable);

            let input = document.createElement('input');
            input.className = arguments[i];
            form.append(input);
        }

        this.select = document.createElement('select');
        for(let i in this.diagramms){
            let option = document.createElement('option');
            option.value = i;
            option.textContent = this.diagramms[i];
            this.select.append(option);
        }
        this.tableDiv.append(this.select);

        //добавляю кнопку для добавления данных
        this.addButton = document.createElement('button');
        this.addButton.className = 'add';
        this.addButton.classList.add('btn');
        this.addButton.textContent = 'Добавить Данные'; 
        this.tableDiv.append(this.addButton);

        //Событие при клике на кнопку Добавить Данные
        this.addButton.onclick = () => {
            let color = getRandomColor();
            this.addDataToTable(color);
            clearRect();
            drawPieChart(data, canvas);
        };

        this.makeButton = document.createElement('button');
        this.makeButton.className = 'makeD';
        this.makeButton.classList.add('btn');
        this.makeButton.textContent = 'Создать диаграмму'; 
        this.tableDiv.append(this.makeButton);

        //Создаю див для канваса 
        this.canvasDiv = document.createElement('canvas');
        this.canvasDiv.className = 'canva-div';

        this.canvas = document.createElement('canvas');
        this.canvas.className = 'canvas';
        this.canvas.style.display = 'block';
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.canvasDiv.append(this.canvas );


        //Добавляю все в основные дивы и в бади
        this.cont.append(this.tableDiv);
        this.cont.append(this.canvasDiv);
        document.body.append(this.cont);


    }

    //ДОбавление новой строки в таблицу через форму
    addDataToTable(color){

        let inputs = document.querySelectorAll('input');
        let newRow = [];
        let nameEmpty = true;
        let phoneEmpty = true;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value !== undefined) {
              newRow.push(inputs[i].value);
            }
        }

        //Проверка на заполения Имени и одного Номера
        if (newRow[0].trim() !== '') {
            nameEmpty = false;
        }
        if (newRow[1].trim() !== '') {
            phoneEmpty = false;
        }
        
        if (nameEmpty || phoneEmpty) {
            modalWindow('Пожалуйста, заполните данные полностью.');
            return false;
        }
        
        //Добавление Контакта
        let tr = document.createElement('tr');
        tr.className = 'contact';
        for (let i in newRow) {
            let td = document.createElement('td');
            td.textContent = String(newRow[i]);
            td.style.color = color;
            tr.append(td);
        }
    
        this.data.push(newRow);
        this.#tbody.appendChild(tr);

        for( let input of inputs) {
            input.value = '';
        }

        let type = select.value;
        clearRect();
        switch (type) {
            case 'histogram':
                drawHistogram(data, canvas);
                break;
             case 'pie':
                drawPieChart(data, canvas);;
                break;

        //Эти два я не делалалалалалалалалалаллалалалалалаллааллалаалалаааааааааааааааааааааааааааааааааааааааааааалллллллааа
            case 'doughnut':
                drawDoughnutgram();
                break;
            case 'line':
                drawLinegram();
                break;
        }

        return true;

    }

    //Создаю метод добавления нового контакта через JS
    addRowInsideJS(list, color){
        let newRow = [];
    let tr = document.createElement('tr');
        tr.className = 'contact';
        for (let i in list) {
            newRow.push(list[i]);
            let td = document.createElement('td');
            td.style.color = color;
            td.textContent = String(list[i]);
            tr.append(td);
        }
        this.data.push(newRow);
        this.#tbody.append(tr);

        return true;
    }

}

let a = new DiagramForTableValues('Город', 'Население');
a.addRowInsideJS(['Алматы', "2147113"]);
a.addRowInsideJS(['Астана', '1340782']);
a.addRowInsideJS(['Шымкент', '1184113']);


let data = a.data
let canvas = document.querySelector('canvas');

const select = document.querySelector('select');

select.addEventListener('change', function() {
    let type = select.value;
    clearRect();
    switch (type) {
        case 'histogram':
            drawHistogram(data, canvas);
            break;
        case 'pie':
            drawPieChart(data, canvas);;
            break;

        //Эти два я не делалалалалалалалалалаллалалалалалаллааллалаалалаааааааааааааааааааааааааааааааааааааааааааалллллллааа
        case 'doughnut':
            drawDoughnutgram();
            break;
        case 'line':
            drawLinegram();
            break;
    }
  
});

window.addEventListener('load', () => {
    let type = select.value;
    clearRect();
    switch (type) {
        case 'histogram':
            colorCode = drawHistogram(data, canvas);
            break;
        case 'pie':
            colorCode = drawPieChart(data, canvas);;
            break;
        case 'doughnut':
            colorCode = drawDoughnutgram();
            break;
        case 'line':
            colorCode = drawLinegram();
            break;
    }
    
});


function clearRect(){
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}