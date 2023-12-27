class SuperStoreItem {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.url = null;
      
        //Создала div общий с классом item. В конструкторе обозначен this.element
        this.element = document.createElement('div');
        this.element.className = 'item';
      
        //Картинку, вставила в this.element (див item)
        this.imageElement = document.createElement('img');
        this.element.append(this.imageElement);
        //
        this.imageElement.addEventListener('click', (ev) =>{
            ev.stopPropagation();
            this.openImage();
        })
      
        //div для информации с классом info. В конструкторе обозначен this.infoElement. 
        //Вставила в this.element (див item)
        this.infoElement = document.createElement('div');
        this.infoElement.className = 'info';
        this.element.append(this.infoElement);
      
        //h2 для названия товара. В конструкторе обозначен this.nameElement. 
        //Вставила в this.infoElement (див info)
        this.nameElement = document.createElement('h2');
        this.nameElement.textContent = name;
        this.infoElement.append(this.nameElement);
      
        //p для цены товара с классом price. В конструкторе обозначен this.priceElement. 
        //Вставила в this.infoElement (див info)
        this.priceElement = document.createElement('p');
        this.priceElement.className = 'price';
        this.priceElement.textContent = price;
        this.infoElement.append(this.priceElement);
      
        //p для цены товара с классом description. В конструкторе обозначен this.descriptionElement. 
        //Вставила в this.infoElement (див info)
        this.descriptionElement = document.createElement('p');
        this.descriptionElement.className = 'description';
        let ol = document.createElement('ol');
        let arrOfItemProperties = description.split(","); 
        for (let i in arrOfItemProperties) { 
            let li = document.createElement('li');
            li.textContent = arrOfItemProperties[i].trim();
            ol.append(li);
        }
        this.descriptionElement.append(ol);
        this.descriptionElement.hidden = true;
        this.infoElement.append(this.descriptionElement);
      
        //Событие для клика на див для разворота description, то есть для метода this.toggle()
        this.element.addEventListener('click', (ev) => {
            ev.stopPropagation();
            //ИТОГ: КОГДА КЛИКАЮ НА this.element item  РАЗВОРАЧИВАЕТСЯ description, НО КОГДА я НАЖИМАЮ НА body И Т.Д. toggle() НЕ СРАБАТЫВАЕТ!!!!
            this.toggle();
        });
      
        //button для кнопки купить с классами btn и red. В конструкторе обозначен this.buyButton. 
        //Вставила в this.infoElement (див info)
        this.buyButton = document.createElement('button');
        this.buyButton.className = 'btn';
        this.buyButton.classList.add('red');
        this.buyButton.textContent = 'В корзину';
        this.infoElement.append(this.buyButton);

        //Событие на кнопку купить
        this.buyButton.addEventListener('click', (ev) => {
            ev.stopPropagation();
            //ev.stopPropagation() - это метод предотвращает дальнейшее распространение (bubbling) события на другие элементы в DOM (Document Object Model).
            //Когда происходит событие на элементе в DOM, оно обычно сначала срабатывает на самом вложенном элементе, 
            //затем на его родительском элементе, затем на его родительском элементе и так далее до корневого элемента документа. 
            //Этот процесс называется "всплытием" (bubbling) события.
            //ИТОГ: КОГДА НАЖИМАЮ КНОПКУ КУПИТЬ ИЗЗА ЩЕЛЧКА МОЖЕТ СРАБОТАТЬ toggle(), А ИЗЗА ЭТОГО МЕТОДА КЛИК НЕ РАСПРОСТРАНЯЕТСЯ НА РАЗВЕРТКУ description
            this.buy();
        });
    }
    
    setImage(url) {
        this.url = url;
        this.imageElement.src = url;
    }

    openImage(ev) {
        let baseDiv = document.createElement('div');
        baseDiv.classList.add('osnova')
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = this.url;
        div.classList.add('stuff-image');
        div.append(img);

        let buttonOfImage = document.createElement('button');
        buttonOfImage.textContent = "Выйти"
        buttonOfImage.classList.add('btn');
        div.append(buttonOfImage);

        baseDiv.appendChild(div);
        document.body.appendChild(baseDiv);

        buttonOfImage.addEventListener('click', () => {
            baseDiv.remove();
        })
    }
    
    expand() {
        //Хехехехехехехе  ВИТАЛИЙ, если прочтете то я сама офигела что сработало. Я в книге сегодня прочитала про атрибут hidden
        if (this.descriptionElement.hidden) {
            this.descriptionElement.hidden = false;
        }
    }
    
    collapse() {
        if (!this.descriptionElement.hidden) {
            this.descriptionElement.hidden = true;
        }
    }
    
    toggle() {
        if (!this.descriptionElement.hidden) {
            this.collapse();
        } else {
            this.expand();
        }
    }
    
    buy(ev) {
        let baseDiv = document.createElement('div');
        baseDiv.className = 'osnova';
        let alert = document.createElement('div');
        alert.className = 'alert';
        alert.innerHTML = '<h3>Вы добавили в корзину </h3>';
        alert.insertAdjacentHTML('beforeend', `<p>${this.name}</p> <br /> <p>${this.price}</p>`);
        baseDiv.append(alert);
        document.body.append(baseDiv);
        //Хехехех это тоже я в книге прочитала
        setTimeout(() => baseDiv.remove(), 1500);
    }
    
    sync() {
      this.nameElement.textContent = this.name;
      this.priceElement.textContent = this.price;
      this.descriptionElement.textContent = this.description;
    }
  }

let item1 = new SuperStoreItem("Чайник Tefal KI-700", "29990 тг", "Объём - 1.7л, Мощность - 2200Вт, Материал корпуса -Стекло, Тип нагревательного элемента - Дисковый нагреватель, Высота - 30см,Ширина -21, Глубина - 21см, Вес -1.12кг");
let item2 = new SuperStoreItem('Холодильник LG GC-B399S',  "259990 тг", "Количество дверей -2, Количество камер -2, Уровень шума - 36дБ, Тип управления - Механический, Хладагент - R600a, Расположение морозильной камеры - Снизу, Количество компрессоров -1, Тип компрессора - Инверторный, Годовой расход электроэнергии - 242кВт/год, Ледогенератор - Да, Высота - 172см, Ширина - 59.5см, Глубина - 68.2см, Вес - 64кг");
let item3 = new SuperStoreItem("Телeвизор LG 43",  "184990тг", 'Диагональ экрана - 43см(109 см), Разрешение экрана - 1920x1080 Full HD, Поддержка технологии "Smart TV" -Да, Технология - LED, Операционная система - webOS, Соотношение сторон - 16:9, Поддержка Wi-Fi - Да');
let item4 = new SuperStoreItem('Ноутбук Lenovo IdeaPad 3 i5 1235U',  '229 990 тг', 'Диагональ дисплея - 15.6 дюйм, Серия процессора - Intel Core i5, Модель процессора - 1235U, Объем оперативной памяти - 8ГБ, Ширина - 359.2мм, Толщина - 19.9мм, Длина - 236.5 мм, Вес - 1.62 кг, Bluetooth - Да, Поддержка Wi-Fi - Да, Разрешение дисплея - 1920x1080 Full HD, Яркость (Нит) - 300, Тип матрицы экрана - IPS');
item1.setImage('chainik.jpg');
item2.setImage('holodilnik.jpg');
item3.setImage('tv.jpg');
item4.setImage('laptop.jpg');

let flexDiv = document.createElement('div');
flexDiv.className = 'flex';
document.body.append(flexDiv);
flexDiv.append(item1.element);
flexDiv.append(item2.element);
flexDiv.append(item3.element);
flexDiv.append(item4.element);