let button = document.querySelector('#btn');
button.addEventListener('click', convert);

function convert() {
    // Получаем текст из поля ввода
    const codeInput = document.getElementById("code");
    const code = codeInput.value;

    const regex = /function\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)\)\s*\{([\s\S]*)\}/;
    
    let arrowFunction = code.replace(regex, "const $1 = ($2) => {$3}");
    
    // Выводим преобразованную функцию в соответствующий div
    const outputDiv = document.querySelector(".output");
    outputDiv.textContent = arrowFunction;
}