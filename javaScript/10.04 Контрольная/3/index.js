let allLi = document.querySelectorAll('li');
let lastClickedLi = null;

allLi.forEach((li) => {
  li.onclick = (ev) => {
    if (li.classList.contains('selected')) {
        li.classList.remove('selected');
        lastClickedLi = null;
      } else {
        if (lastClickedLi !== null) {
          lastClickedLi.classList.remove('selected');
        }
        li.classList.add('selected');
        lastClickedLi = li;
      }
  }
});
