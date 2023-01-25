const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

const port = 3000;

// create interface
app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => { // socket is client
	console.log("user connected");

	let name = "chat name";
	let message = "placeholder";

	socket.on("chat name", msg => {
		name = msg;
	});

	socket.on("chat message", msg => {
		console.log(`${name}: ${msg}`);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

// get input from interface
server.listen(3000, () => {
	console.log('listening on *:3000');
});
