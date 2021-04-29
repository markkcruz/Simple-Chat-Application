const chatbox1Element = document.getElementById("chatBox1");
const chatbox2Element = document.getElementById("chatBox2");

const chatForm = document.getElementById('chatForm');

function chatBoxUpdate() {
    console.log("Input Received!");
}

chatbox1Element.oninput = handleInput;

let log = document.getElementById('log');

function handleInput(e) {
    log.textContent = ` - ${e.target.value.length} characters.`;
}

