class Socket {
    constructor(io, socket) {
      this.io = io; // Объект socket.io
      this.socket = socket; // Текущий сокет
  
      this.addedUser = false; // Флаг, указывающий, был ли пользователь добавлен
      this.username = null; // Имя пользователя, связанное с сокетом
    }
  
    newMessage = (data) => {
        chatHistory.push({
            username: this.username,
            message: data // Добавляем новое сообщение в историю чата
        });
    
        this.socket.broadcast.emit('new message', {
            username: this.username,
            message: data // Отправляем событие "new message" для оповещения остальных клиентов о новом сообщении
        });
    }
  
    typing = () => {
      this.socket.broadcast.emit('typing', {
        username: this.username // Отправляем событие "typing" для оповещения остальных клиентов о начале набора сообщения
      });
    }
  
    stopTyping = () => {
      this.socket.broadcast.emit('stop typing', {
        username: this.username // Отправляем событие "stop typing" для оповещения остальных клиентов о прекращении набора сообщения
      });
    }
  
    disconnect = () => {
      if (this.addedUser) {
  
        this.socket.broadcast.emit('user left', {
          username: this.username,
        });
      }
    }
  
    privateMessage = (data) => {
      const recipientSocket = this.io.sockets.sockets[data.recipientId]; // Получаем сокет получателя по его ID
      if (recipientSocket) {
        // Если сокет получателя существует, отправляем ему личное сообщение
        recipientSocket.emit('private message', {
          sender: this.username,
          message: data.message
        });
      }
    }
}


import express from 'express';
import http from 'http';
import { Server as Io } from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new Io(server);
  
app.use(express.static('public'));
  
app.get('/', (req, res) => {
    const fname = path.join(process.cwd(), 'public', 'index.html');
    res.sendFile(fname);
});
  
server.listen(3333, () => {
    console.log("Io server started at", 3333);
});
  
  io.on('connection', (socket) => {
    const customSocket = new Socket(io, socket); // Создание экземпляра класса Socket для каждого подключенного сокета

    socket.on('new message', (data) => {
        customSocket.newMessage(data); // Обработка события "new message" для добавления нового сообщения
    });

    socket.on('typing', () => {
        customSocket.typing(); // Обработка события "typing" для оповещения о начале набора сообщения
    });

    socket.on('stop typing', () => {
        customSocket.stopTyping(); // Обработка события "stop typing" для оповещения о прекращении набора сообщения
    });

    socket.on('disconnect', () => {
        customSocket.disconnect(); // Обработка события "disconnect" для удаления пользователя из чата при отключении
    });

    socket.on('private message', (data) => {
        customSocket.privateMessage(data); // Обработка события "private message" для отправки личного сообщения
    });
});
  