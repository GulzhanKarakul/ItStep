//Виталий! не обращайте на большое колличество комментариев! т.к я делаю при помощи ютюба многое комментирую для себя и 
//я решила удалять все домашки с др папок т.к. они все равно хранятся в Git папке, поэтому теперь будут домашки с моими комметами.
// Просто игнорируйте их пожалуйста!

// на счет теста есть вопросы. Пока это сдаю!

let colorForm = document.querySelector('.color-form');
let colorList = document.querySelector('#color-list');
let nameInput = document.querySelector('#name-input');
let typeInput = document.querySelector('#type-input');
let codeInput = document.querySelector('#code-input');

// Так я получаю данные с локалСторэдж
let colors = getColorsFromLocalStorage() || []; //Не совсем понимаю []? -----------------Спросить у Виталия на уроке!

// отображение на странице
displayColors();

// Обработка отправки формы
colorForm.addEventListener('submit', (e) => {
  e.preventDefault(); // эта строка предотвращает перезагрузку страницы .preventDefault() - стоит выучить!!!!!!!!!!!!!!!

  // значения из формы и trim() обрезает
  let name = nameInput.value.trim();
  let type = typeInput.value.trim();
  let code = codeInput.value.trim();
  console.log(name);
  console.log(type);
  console.log(code);

  // Проверка, что все поля заполнены
  if (!name || !type || !code) {
    alert('Пожалуйста, заполните все поля формы');
    return;
  }

  // Проверка, что название состоит только из букв
  if (!/^[a-zA-Z]+$/.test(name)) {
    alert('Название цвета должно состоять только из букв');
    return;
  }
  // регулярное выражение /^[a-zA-Z]+$/.Регулярные выражения (RegExp) представляют собой шаблоны, ------------------- ВЫУЧИТЬ!!!
  // которые используются для поиска и сопоставления текста с заданными правилами. В данном случае, 
  //шаблон /^[a-zA-Z]+$/ соответствует строке, которая начинается с начала строки ^, 
  //затем следуют одна или более буквы (маленькие или большие) [a-zA-Z]+, а затем конец строки $.

  // .test(arg) является методом объекта RegExp, который позволяет проверить,---------------------------------------ВЫУЧИТЬ!!!!
  // соответствует ли строка регулярному выражению. Он возвращает true, если строка 
  //соответствует регулярному выражению, и false в противном случае


  // Проверяю, что такого названия еще нет в списке цветов
  let existingColor = colors.find((color) => color.name.toLowerCase() === name.toLowerCase());
  if (existingColor) {
    alert('Цвет с таким названием уже существует');
    return;
  }
  //Метод find ищет первый элемент в массиве, для которого функция-аргумент возвращает true.-------------------------ВЫУЧИТЬ!!!!
  // Здесь find проверяет, есть ли в массиве элемент с именем таким же что и name 

  // В зависимости от типа цвета проверяю правильность введенного кода при помощи switch
//Очень прикольно использовать нужную функцию из 3-х в зависимости от введенных данных-----------------------------НА ЗАМЕТКУ!!!
  let colorCode;
  switch (type) {
    case 'rgb':
      colorCode = validateRGB(code);
      break;
    case 'rgba':
      colorCode = validateRGBA(code);
      break;
    case 'hex':
      colorCode = validateHEX(code);
      break;
    default:
      alert('Неверный тип цвета');
      return;
  }

  // Если проверки пройдены успешно, добавляем новый цвет в список и отображаем на странице
  let newColor = { name, type, code: colorCode };
  colors.push(newColor);
  
  displayColors(); 
  clearForm();
});

// Функция проверки RGB-кода цвета
function validateRGB(code) {
    let rgb = code.split(',');
    rgb.every((num) => Number(num)); // знакомая every
    if (rgb.length !== 3 || !rgb.every((num) => num >= 0 && num <= 255)) {
      alert('Неверный формат RGB-кода');
      throw new Error('Неверный формат RGB-кода'); //throw new Error в новом цвете заиграл, -----------------------ПОВТОРИТЬ!!!!
                                                   //можно использовать вместо TDD для window!
    }
    return `rgb(${rgb.join(',')})`;
  }
  
  
// Функция проверки RGBA-кода цвета
function validateRGBA(code) {
  let rgba = code.split(',');
  if (rgba.length !== 4 || !rgba.slice(0, 3).every((num) => num >= 0 && num <= 255) || rgba[3] < 0 || rgba[3] > 1) {
    alert('Неверный формат RGBA-кода');
    throw new Error('Неверный формат RGBA-кода');
  }
  return `rgba(${rgba.join(',')})`;
}

// Функция проверки HEX-кода цвета
function validateHEX(code) {
if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(code)) {
alert('Неверный формат HEX-кода');
throw new Error('Неверный формат HEX-кода');
}
return code.toUpperCase();
}

// Функция сохранения цветов в localStorage
function saveColorsToLocalStorage() {
  localStorage.setItem('colors', JSON.stringify(colors));
}

// Функция отображения списка цветов на странице
function displayColors() {
colorList.innerHTML = '';
colors.forEach((color) => {
let li = document.createElement('li');
li.style.backgroundColor = color.code;
let div = document.createElement('div');
div.classList.add('fon');
div.textContent = `${color.name} ${color.type} ${color.code}`;
li.appendChild(div);
colorList.appendChild(li);
});
}

// Функция очистки формы после добавления цвета
function clearForm() { //Это крутяк никогда не думала о добавлении очистки формы!----------------------ЗАПОМНИТЬ! ПОНАДОБИТСЯ МНОГО РАЗ!
nameInput.value = '';
typeInput.value = 'RGB';
codeInput.value = '';
saveColorsToLocalStorage() ; //после очистки сохраняю в локал сторэдж данные!
}

// Функция получения цветов из localStorage
function getColorsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('colors')) || []; //Не совсем понимаю []? -----------------Спросить у Виталия на уроке!
}
