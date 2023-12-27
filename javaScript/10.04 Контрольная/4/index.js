let tree = document.querySelector('.tree');
let div = document.querySelector('.apple');

tree.onclick = (ev) => {
    let apple = div.cloneNode(true);

    let newX = ev.clientX  - apple.clientWidth/2;
	let newY = ev.clientY  - apple.clientHeight/2;

    tree.append(apple);
    apple.style.top = newY + 'px';
    apple.style.left = newX + 'px';
}