const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 3000;

// create interface
app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// get input from interface
server.listen(3000, () => {
	console.log('listening on *:3000');
});
