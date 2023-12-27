let button = document.getElementById('btn');
let listToDo = document.getElementById('toDo');
let listDone = document.getElementById('done');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  listToDo.innerHTML = '';
  listDone.innerHTML = '';
  todos.forEach((todo) => {
    let liHTML = '<li><input type="checkbox"' + (todo.done ? ' checked' : '') + '></input>' + todo.text + '</li>';
    if (todo.done) {
      listDone.insertAdjacentHTML("beforeend", liHTML);
    } else {
      listToDo.insertAdjacentHTML("beforeend", liHTML);
    }
  });
  updateCheckboxes();
}

function updateCheckboxes() {
  checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      let li = checkbox.parentNode;
      let index = Array.prototype.indexOf.call(listToDo.children, li);
      if (checkbox.checked) {
        todos[index].done = true;
        listDone.appendChild(li);
      } else {
        todos[index].done = false;
        listToDo.appendChild(li);
      }
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  });
}

renderTodos();

button.addEventListener('click', () => {
  let input = document.getElementById('newLi');
  if(input.value !== ''){
    todos.push({text: input.value, done: false});
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
  }
  input.value = '';
});