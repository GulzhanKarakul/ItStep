class ContactNumber {
    head = [];
    data = [];
    #tbody = null;

    constructor(){
        //Создала div общий с классом item. В конструкторе обозначен this.element
        this.element = document.createElement('div');
        this.element.className = 'item';
        let hOne = document.createElement('h1');
        hOne.textContent = 'Контакты';
        this.element.appendChild(hOne);

        //Создала table общий с классом contactList. В конструкторе обозначен this.table
        this.table = document.createElement('table');
        this.table.className = 'contactlist';

        //Создала head общий с классом contactList. В конструкторе обозначен this.head
        let thead = document.createElement('thead');
        thead.className = 'header';
        this.table.append(thead);
        for(let i in arguments) {
			      this.head[i] = arguments[i];
			      let th = document.createElement('th');
			      th.textContent = String(this.head[i]);
			      thead.append(th);
        }

        this.#tbody = document.createElement('tbody');
		    this.table.append(this.#tbody);

        

        //Добавляю таблицу в div и div в document
        this.element.append(this.table);
        document.body.prepend(this.element);

        //div для кнопок
        let divForButtons = document.createElement('div');
        divForButtons.className = 'flex';
        this.element.append(divForButtons);

        //Кнопка для создания нового контакта
        this.buttonToAdd = document.createElement('button');
        this.buttonToAdd.className = 'add';
        this.buttonToAdd.classList.add('btn');
        this.buttonToAdd.textContent = 'Новый Контакт';
        divForButtons.appendChild(this.buttonToAdd);
        

        //Событие при клике на кнопку Сохранить
        this.buttonToAdd.onclick = () => this.addContactFromButton();

        //Кнопка для импорта
        this.buttonImport = document.createElement('button');
        this.buttonImport.className = 'add';
        this.buttonImport.classList.add('btn');
        this.buttonImport.textContent = 'Импорт';
        divForButtons.appendChild(this.buttonImport);

        this.inputImport = document.createElement('input');
        this.inputImport.id = "fileinput";
        this.inputImport.type = "file";
        this.inputImport.style = "visibility:hidden;";
        this.inputImport.accept = "text/csv, .csv";
        //divForButtons.appendChild(this.inputImport);

        this.inputImport.oninput = (ev) => this.importContacts();


        //Событие при клике на кнопку Импорт
        this.buttonImport.onclick = () => this.inputImport.click();

        //Кнопка для экспорта
        this.buttonExport = document.createElement('button');
        this.buttonExport.className = 'add';
        this.buttonExport.classList.add('btn');
        this.buttonExport.textContent = 'Экспорт';
        divForButtons.appendChild(this.buttonExport);

        //Событие при клике на кнопку Экспорт
        this.buttonExport.onclick = () => {
          this.exportContacts();
          this.showDescriptionSvgFileUse();
        }

        // Сортировка
        this.sortBy(0);
    }

    //Метод Сортировки по индексу
    sortBy(columnIndex) {
      // Сортирую данные по выбранному индексу столбца
      // Если что я тупо загуглила как сделать сортировку и нечувствительной к регистру тоже
      this.data.sort((a, b) => a[columnIndex].localeCompare(b[columnIndex], undefined, { sensitivity: 'base' }));
    
      // Очищаю tbody
      this.#tbody.innerHTML = '';
    
      // Добавляю отсортированные строки в tbody
      for (let i = 0; i < this.data.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < this.data[i].length; j++) {
          const td = document.createElement('td');
          td.textContent = this.data[i][j];
          tr.appendChild(td);
        }
        this.#tbody.appendChild(tr);
      }
    }
    
    

    //Создаю метод добавления нового контакта через форму
    addContactFromButton(){
        //Сщоздаю саму форму в которой будут инпуты, для  ввода для создания нового контакта
        let baseDiv = document.createElement('div');
        baseDiv.className = 'osnova';
        let modalW = document.createElement('div');
        modalW.className = 'modalW';
        let form = document.createElement('form');
        form.className = 'inputform';

        //Создаю инпуты для каждого аргумента
        let theads = document.querySelectorAll('th');
        for(let th of theads){
            let lable = document.createElement('lable');
            lable.textContent = th.textContent;
            form.append(lable);

            let input = document.createElement('input');
            input.className = th.textContent;
            form.append(input);
        }
        //Добавляю форму в модальное окно и добавляю модальное окно в window
        modalW.append(form);

        //Кнопка отменить
        let buttonCancel = document.createElement('button');
        buttonCancel.textContent = "Отменить"
        buttonCancel.className = 'cancel';
        buttonCancel.classList.add('btn');
	      modalW.append(buttonCancel);

        //Событие на кнопку Отмены
        buttonCancel.onclick = () => baseDiv.remove();

        //Кнопка Сохранить
	    let buttonSafe = document.createElement('button');
        buttonSafe.textContent = "Сохранить";
        buttonSafe.className = 'safe';
        buttonSafe.classList.add('btn');
	    modalW.append(buttonSafe);

        //Событие на кнопку Сохранить
	    buttonSafe.onclick = () => {
            const numbers = '+1234567890';
            let inputs = document.querySelectorAll('input');
            let newRow = [];
            let nameEmpty = true;
            let phoneEmpty = true;
          
            // Проверка, что номера состоят из чисел или с +
            if (inputs[1].value.trim() !== '') {
              for (let char of inputs[1].value.trim()) {
                if (numbers.indexOf(char) < 0) {
                  modalWindow('Пожалуйста, введите корректные данные.');
                  return false;
                } else if (char == '+') {
                  if (inputs[1].value.indexOf(char) !== 0) {
                    modalWindow('Пожалуйста, введите корректные данные.');
                    return false;
                  }
                }
              }
            }
          
            // Проверка, что номера состоят из чисел или с +
            if (inputs[2].value.trim() !== '') {
              for (let char of inputs[2].value.trim()) {
                if (numbers.indexOf(char) < 0) {
                  modalWindow('Пожалуйста, введите корректные данные.');
                  return false;
                } else if (char == '+') {
                  if (inputs[2].value.indexOf(char) !== 0) {
                    modalWindow('Пожалуйста, введите корректные данные.');
                    return false;
                  }
                }
              }
            }

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
            if (newRow[2].trim() !== '') {
                phoneEmpty = false;
            }
            
            if (nameEmpty || phoneEmpty) {
                modalWindow('Пожалуйста, заполните как минимум имя и один номер.');
                return false;
            }
            
            //Добавление Контакта
            let tr = document.createElement('tr');
            tr.className = 'contact';
            for (let i in newRow) {
                let td = document.createElement('td');
                td.textContent = String(newRow[i]);
                tr.append(td);
            }
        
            this.data.push(newRow);
            this.#tbody.appendChild(tr);
            //сортировка
            this.sortBy(0);
        
            baseDiv.remove();
            return true;
        };
        
        baseDiv.append(modalW);
        document.body.appendChild(baseDiv);  
    }

    //Создаю метод добавления нового контакта через JS
    addContactInsideJS(list){
        const numbers = '+1234567890';
        let newRow = [];
        let nameEmpty = true;
        let phoneEmpty = true;

        //Проверка на то чтобы были заполены все поля в листе, даже если это пустая строка
        if (list.length < this.head.length) {
            console.log('Не все поля указаны');
            return false;
        }

        //Проверка на заполения Имени и одного Номера
        if (list[0].trim() !== '') {
            nameEmpty = false;
        }
        if (list[1].trim() !== '') {
            phoneEmpty = false;
        }
        if (list[2].trim() !== '') {
            phoneEmpty = false;
        }
        
        if (nameEmpty || phoneEmpty) {
            console.log('Пожалуйста, заполните как минимум имя и один номер.');
            return false;
        }

        // Проверка, что номера состоят из чисел или с +
        for(let char of list[1].trim()){0
            if(numbers.indexOf(char) < 0){
                console.log('Пожалуйста, введите корректные данные.');
                return false;
            } else
            if(char == '+'){
                if(list[1].indexOf(char) !== 0) {
                    alert('Пожалуйста, введите корректные данные.');
                    return false;
                }
            }
        }

        // Проверка, что номера состоят из чисел или с +
        for(let char of list[2].trim()){
            if(numbers.indexOf(char) < 0){
                console.log('Пожалуйста, введите корректные данные.');
                return false;
            } else
            if(char == '+'){
                if(list[2].indexOf(char) !== 0) {
                    alert('Пожалуйста, введите корректные данные.');
                    return false;
                }
            }
        }

        //Добавление Контакта в таблицу
        let tr = document.createElement('tr');
        tr.className = 'contact';
        for (let i in list) {
            newRow.push(list[i]);
            let td = document.createElement('td');
            td.textContent = String(list[i]);
            tr.append(td);
        }
        this.data.push(newRow);
        this.#tbody.append(tr);
        //сортировка
        this.sortBy(0);

        return true;
    }

    importContacts(files) {
      let file = this.inputImport.files[0];
      console.log(file);
      let reader = new FileReader();
      reader.readAsText(file);
    
      reader.onload = () => {
        let text = reader.result;
        let newContacts = [];
        let rows = text.split('\n');
        for (let i = 1; i < rows.length; i++) {
          let row = rows[i].trim();
          if (row) {
            let values = row.split(',');
            let name = values[0];
            let existingContact = this.data.find(c => c[0] === name);
            if (existingContact) {
              let newName = `${name} (imported)`;
              values[0] = newName;
            }   
            newContacts.push(values);
          }
       }
        this.data = [...this.data, ...newContacts];
        this.renderTable();
      };
    }

    renderTable() {
      // Очищаю tbody
      this.#tbody.innerHTML = '';
    
      // Создаю строки таблицы на основе данных в this.data
      for (let i = 0; i < this.data.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < this.head.length; j++) {
          const cell = document.createElement('td');
          cell.textContent = this.data[i][j];
          row.appendChild(cell);
        }
        this.#tbody.appendChild(row);

        //сортировка
        this.sortBy(0);
      }
    }

    exportContacts() {
      let csvRows = [];
      let headers = this.head.map(header => `"${header}"`);
      console.log(headers);
      csvRows.push(headers.join(',')); 
              
      for (let row of this.data) {
          let csvRow = row.map(data => data);
          csvRows.push(csvRow.join(','));
      }
              
      let csvString = csvRows.join('\n');
      let blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'contacts.csv';
      link.click();
  }

  showDescriptionSvgFileUse(){
    let baseDiv = document.createElement('div');
    baseDiv.classList.add('osnova')
    let div = document.createElement('div');
    let hOne = document.createElement('h1');
    hOne.textContent = 'Пояснение по открытию SVG файла в EXCEL';
    div.appendChild(hOne);
    let p = document.createElement('p');
    p.textContent = 'Следуя инструкции на картинке, зайдите в настройки "Из текста" и поменяйте формат чтения текста на UTF-8';
    div.appendChild(p);
    let img = document.createElement('img');
    img.src = 'description.png';
    div.classList.add('stuff-image');
    div.appendChild(img);
    baseDiv.appendChild(div);

    document.body.appendChild(baseDiv);

    baseDiv.onclick = () => baseDiv.remove();
  }
}

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

let a = new ContactNumber('Имя', 'Мобильный номер', 'Городской номер', 'Адрес');
a.addContactInsideJS(['Гульжан Каракул', '87753607594', '+77478023616', 'Таугуль-1 дом 90']);
a.addContactInsideJS(['Дима Пан', '87471174717', '', 'Таугуль-1 дом 90']);