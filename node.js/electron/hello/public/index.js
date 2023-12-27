const boldBtn = document.getElementById('bold');
const italBtn = document.getElementById('italic');
const undBtn = document.getElementById('underline');

const saveBtn = document.getElementById('save');
const openBtn = document.getElementById('open');
const mainArea = document.getElementById('main-area');

boldBtn.onclick = () => {
    let selected = window.getSelection().toString();
    mainArea.innerHTML = mainArea.innerHTML.replace(selected, selected.bold());
}

italBtn.onclick = () => {
    let selected = window.getSelection().toString();
    mainArea.innerHTML = mainArea.innerHTML.replace(selected, selected.italics());
}

undBtn.onclick = () => {
    let selected = window.getSelection().toString();
    mainArea.innerHTML = mainArea.innerHTML.replace(selected, `<u>${selected}</u>`);
}

saveBtn.onclick = () => {
    window.backend.save(mainArea.innerHTML);
}

openBtn.onclick = async () => {
  let text = await window.backend.openFile();
  console.log(text);
  mainArea.innerHTML = text;
};
