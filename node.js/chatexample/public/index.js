// Подключение к серверу Socket.io
const socket = io();

// Обработчик события "new message" для обновления чата с новым сообщением
socket.on("new message", (data) => {
    const generalRoom = document.getElementById('general-room');
    let msg = document.createElement('div');
    msg.classList.add('incoming');
    msg.innerHTML = `<b>${data.username}:</b> ${data.message}`;
    generalRoom.append(msg);
});

// Обработчик отправки формы для отправки нового сообщения
document.querySelector('#input-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let msg = document.querySelector('#input').value;
    document.querySelector('#input').value = '';
    if (msg) {
        socket.emit("new message", msg);
    }
});

// Обработчик события "typing" для отображения информации о наборе сообщения
socket.on('typing', (data) => {
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.textContent = `${data.username} печатает...`;
});

// Обработчик события "stop typing" для скрытия информации о наборе сообщения
socket.on('stop typing', () => {
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.textContent = '';
});

// Обработчик события "user joined" для оповещения о присоединении нового пользователя
socket.on('user joined', (data) => {
    console.log(`${data.username} присоединился к чату. Всего пользователей: ${data.numUsers}`);
});

// Обработчик события "user left" для оповещения о выходе пользователя из чата
socket.on('user left', (data) => {
    console.log(`${data.username} покинул чат. Всего пользователей: ${data.numUsers}`);
});