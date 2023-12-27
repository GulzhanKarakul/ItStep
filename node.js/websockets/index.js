// Меня выбесило все и я написала щас все заново, в таком виде

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

const connectedUsers = new Set();

io.on("connection", (socket) => {
    // Добавление пользователя в множество подключенных пользователей
    connectedUsers.add(socket.id);

    // Уведомление других клиентов о подключенном пользователе
    socket.broadcast.emit("user connected", socket.id);

    // Обработка сообщения чата
    socket.on("send message", (message) => {
        io.emit("chat message", { userId: socket.id, message });
    });

    // Обработка приватного сообщения
    socket.on("send private message", (data) => {
        const { to, message } = data;
        socket.to(to).emit("private message", { from: socket.id, to, message });
    });

    // Обработка запроса о пользователе онлайн
    socket.on("get online users", () => {
        socket.emit("online users", Array.from(connectedUsers));
    });

    // Обработка отключения
    socket.on("disconnect", () => {
        // Удаление пользователя из множества подключенных пользователей
        connectedUsers.delete(socket.id);

        // Уведомление других клиентов о отключенном пользователе
        socket.broadcast.emit("user disconnected", socket.id);
    });
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
    console.log(`Сервер слушает порт ${port}`);
});
