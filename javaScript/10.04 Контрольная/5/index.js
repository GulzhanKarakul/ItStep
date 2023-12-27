let button = document.getElementById('btn');
let listToDo = document.getElementById('toDo');
let listDone = document.getElementById('done');

let checkboxes = document.querySelectorAll('input[type="checkbox"]');

function updateCheckboxes() {
  checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      let li = checkbox.parentNode;
      if (checkbox.checked) {
        listDone.appendChild(li);
      } else {
        listToDo.appendChild(li);
      }
    });
  });
}

updateCheckboxes();
button.addEventListener('click', () => {
  let input = document.getElementById('newLi');
  if(input.value !== ''){
    let liHTML = '<li><input type="checkbox"></input>' + input.value + '</li>';
    listToDo.insertAdjacentHTML("beforeend", liHTML);
    updateCheckboxes();
  }
  input.value = '';
});

