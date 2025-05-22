const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve a página HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Gerenciar conexões de socket
io.on('connection', (socket) => {
    console.log('Um usuário conectado');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Um usuário desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
