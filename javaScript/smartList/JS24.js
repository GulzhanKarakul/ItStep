// Получаю список и кнопку добавления нового элемента
let list = document.getElementById('list');
let addItemBtn = document.getElementById('add-item-btn');
let subPanel = document.querySelectorAll('.sub-panel');
  

// Обработчик нажатия на кнопку добавления нового элемента
addItemBtn.addEventListener('click', function(event) {
  // Получаю текст нового элемента из поля ввода
  let newItemText = document.getElementById('new-item-text').value;
  console.log(newItemText);

  // Если поле ввода пустое, новый элемент не добавляется
  if (!newItemText) {
    return;
  }

  // Получаю ли и клонирую ее
  let li = document.querySelector('li');
  let newLi = li.cloneNode(true);
  // Меняю текст внутри на инпут
  newLi.querySelector('.item').textContent = newItemText;
  //Добавляю новую ли
  list.append(newLi);

  // Очищаю поле ввода
  document.getElementById('new-item-text').value = '';
});

// обработчик событий для каждого элемента списка
list.addEventListener('click', function(event) {
  // проверяю, что была нажата именно кнопка "up"
  if (event.target.classList.contains('up')) {
    // родительский элемент кнопки "up" (li)
    let li = event.target.closest('li');

    // предыдущий элемент списка
    let previousLi = li.previousElementSibling;

    // проверяю, есть ли предыдущий элемент
    if (previousLi) {
      // перемещаю текущий элемент списка перед предыдущим элементом
      previousLi.before(li);
    }
  }

  // проверяю, что была нажата именно кнопка "down"
  if (event.target.classList.contains('down')) {
    // родительский элемент кнопки "down" (li)
    let li = event.target.closest('li');

    // следующий элемент списка
    let nextLi = li.nextElementSibling;

    // проверяю, есть ли следующий элемент
    if (nextLi) {
      // перемещаю текущий элемент списка после следующего элемента
      li.before(nextLi);
    }
  }

  // проверяю, что была нажата именно кнопка "delete"
  if (event.target.classList.contains('delete')) {
    //родительский элемент кнопки "delete" (li)
    let li = event.target.closest('li');

    // удаляю элемент
    li.remove();
  }
});

