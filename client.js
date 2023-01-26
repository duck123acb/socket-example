const socket = io();
const input = document.getElementById("input");
const nameInput = document.getElementById("name");
const nameInputParent = document.getElementById("name-wrapper");
const messages = document.getElementById("messages");
let name = null;

setTimeout(() => {
    socket.emit("user joined", socket.id);
}, 250);

input.addEventListener("keypress", e => {
    if (e.key !== "Enter") return;

    if (name !== null) socket.emit("chat name", name);
    else socket.emit("chat name", socket.id);
    socket.emit("chat message", input.value);
    input.value = "";
});

socket.on("recive message", function(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

nameInput.addEventListener("keypress", e => {
    if (e.key !== "Enter") return;

    name = nameInput.value;
    nameInputParent.style.display = "none";
});