const socket = io();

const usersList = document.getElementById("users");
const messages = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const privateMessages = document.getElementById("privateMessages");
const privateMessageInput = document.getElementById("privateMessageInput");
const privateSendButton = document.getElementById("privateSendButton");
const privateChat = document.querySelector(".private-chat");
const privateChatTitle = document.getElementById("privateChatTitle");
let privateChatRoom = null;

// Добавление нового идентификатора пользователя в список пользователей
socket.on("user connected", (userId) => {
    const listItem = document.createElement("li");
    listItem.innerText = userId;
    listItem.addEventListener("click", () => {
        // Очистка предыдущих приватных сообщений
        privateMessages.innerHTML = "";
        openPrivateChat(userId);
    });
    usersList.appendChild(listItem);
});

// Удаление отключенного идентификатора пользователя из списка пользователей
socket.on("user disconnected", (userId) => {
    const userItem = document.querySelector(`#users li:contains('${userId}')`);
    if (userItem) {
        usersList.removeChild(userItem);
    }
});

// Обработка получения приватных сообщений
socket.on("private message", (data) => {
    openPrivateChat(data.from);

    const messageItem = document.createElement("li");
    messageItem.innerText = `${data.from}: ${data.message}`;
    privateMessages.appendChild(messageItem);
});

// Открытие приватного чата с определенным пользователем
function openPrivateChat(userId) {
    // Показать приватный чат и установить его активным
    privateChat.classList.add("active");
    privateChatTitle.innerText = `Приватный чат с ${userId}`;

    // Сохранение комнаты приватного чата
    privateChatRoom = userId;

    // Отправка приватного сообщения выбранному пользователю
    privateSendButton.addEventListener("click", () => {
        const message = privateMessageInput.value;
        socket.emit("send private message", { to: userId, message });
        privateMessageInput.value = "";

        const messageItem = document.createElement("li");
        messageItem.className = 'my';
        messageItem.innerText = ` Me : ${message}`;
        privateMessages.appendChild(messageItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    socket.emit("get online users");

    privateChat.classList.remove("active");

    messageInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          sendButton.click();
        }
    });

    privateMessageInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          privateSendButton.click();
        }
    });

    // Закрытие приватного чата
    privateChat.addEventListener("click", (event) => {
        if (event.target === privateChat) {
            privateChat.classList.remove("active");
            privateChatRoom = null;
        }
    });

    // Обновление списка пользователей при получении онлайн-пользователей
    socket.on("online users", (userList) => {
        usersList.innerHTML = "";
        userList.forEach((userId) => {
            const listItem = document.createElement("li");
            listItem.innerText = userId;
            listItem.addEventListener("click", () => {
                openPrivateChat(userId);
            });
            usersList.appendChild(listItem);
        });
    });

    // Отправка сообщения чата
    sendButton.addEventListener("click", () => {
        const message = messageInput.value;
        socket.emit("send message", message);
        messageInput.value = "";
    });

    // Получение и отображение сообщений чата
    socket.on("chat message", (data) => {
        const messageItem = document.createElement("li");
        messageItem.innerText = `${data.userId}: ${data.message}`;
        messages.appendChild(messageItem);
    });
});