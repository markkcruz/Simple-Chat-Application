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

function releaseChatBox1() {
    document.getElementById("chatBox1").disabled = false;
}

// Refreshes the incoming chat every second.
var myVar = setInterval(userBox2NameChecker, 1000);


function updateDB() {
    var chatbox1Value = document.getElementById("chatBox1").value; // Value of the first chatbox1 to update to the DB
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhr; //
    if (window.XMLHttpRequest) { // Not IE
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 and older
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var data = "chatbox1Value_data=" + chatbox1Value + "&" + "username_data=" + username + "&" + "password_data=" + password; // Redundant, but needed if you want to format the data into something else.
    //var userdata = "username_data=" + username; // Redundant, but needed if you want to format the data into something else.
    //var passdata = "password_data=" + password; // Redundant, but needed if you want to format the data into something else.
    xhr.open("POST", "chatBoxSend.php", true); // The open method sends a initializes a new request to the server. Async (the whole point of this AJAX)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // the setRequestHeader method sets the value of the HTTP request header. "Content-Type" state the header of the DOMstring while "application/x... sets the body of the header.
    xhr.send(data); // The send method sends that data contained in our variable to the server
    //xhr.send(userdata); // The send method sends that data contained in our variable to the server
    //xhr.send(passdata); // The send method sends that data contained in our variable to the server

    xhr.onreadystatechange = updateChatbox; // property of the XMLHttpRequest object which gets called when the readyState attribute is changed. This is assigned to the below function.
    function updateChatbox() {
        if (xhr.readyState == 4) { // denotes that the operation is complete
            if(xhr.status == 200) { // If the operation was successful, the status of the response to the request is checked. It returns the HTTP result code. Result code 200 states that the response to the request is successful.
                document.getElementById("error").innerHTML = xhr.responseText; // Change the value of the chatBox2 to receive contents of chat; what is in the row of the UID (name).
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}

function userBox2NameChecker() { // Updates the ChatBox
    //var chatbox1Value = document.getElementById("chatBox1").value; // Value of the first chatbox1 to update to the DB
    //alert("Hello! I am an alert box!!");
    var username = document.getElementById("username2").value;
    //var password = document.getElementById("password").value;

    var xhr; //
    if (window.XMLHttpRequest) { // Not IE
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 and older
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var data = "username_data=" + username; // Redundant, but needed if you want to format the data into something else.
    //var userdata = "username_data=" + username; // Redundant, but needed if you want to format the data into something else.
    //var passdata = "password_data=" + password; // Redundant, but needed if you want to format the data into something else.
    xhr.open("POST", "updateChatBox.php", true); // The open method sends a initializes a new request to the server. Async (the whole point of this AJAX)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // the setRequestHeader method sets the value of the HTTP request header. "Content-Type" state the header of the DOMstring while "application/x... sets the body of the header.
    xhr.send(data); // The send method sends that data contained in our variable to the server
    //xhr.send(userdata); // The send method sends that data contained in our variable to the server
    //xhr.send(passdata); // The send method sends that data contained in our variable to the server

    xhr.onreadystatechange = updateChatbox2; // property of the XMLHttpRequest object which gets called when the readyState attribute is changed. This is assigned to the below function.
    function updateChatbox2() {
        if (xhr.readyState == 4) { // denotes that the operation is complete
            if(xhr.status == 200) { // If the operation was successful, the status of the response to the request is checked. It returns the HTTP result code. Result code 200 states that the response to the request is successful.
                document.getElementById("chatBox2").value = xhr.responseText; // Change the value of the chatBox2 to receive contents of chat; what is in the row of the UID (name).
            } else {
                //alert('There was a problem with the request.');
            }
        }
    }
}

function chatBox1Update() {
    var chatbox1Value = document.getElementById("chatBox1").value; // Value of the first chatbox1 to update to the DB
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhr; //
    if (window.XMLHttpRequest) { // Not IE
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 and older
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var data = "chatbox1Value_data=" + chatbox1Value + "&" + "username_data=" + username + "&" + "password_data=" + password; // Redundant, but needed if you want to format the data into something else.
    //var userdata = "username_data=" + username; // Redundant, but needed if you want to format the data into something else.
    //var passdata = "password_data=" + password; // Redundant, but needed if you want to format the data into something else.
    xhr.open("POST", "chatBox1Update.php", true); // The open method sends a initializes a new request to the server. Async (the whole point of this AJAX)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // the setRequestHeader method sets the value of the HTTP request header. "Content-Type" state the header of the DOMstring while "application/x... sets the body of the header.
    xhr.send(data); // The send method sends that data contained in our variable to the server
    //xhr.send(userdata); // The send method sends that data contained in our variable to the server
    //xhr.send(passdata); // The send method sends that data contained in our variable to the server

    xhr.onreadystatechange = updateChatbox; // property of the XMLHttpRequest object which gets called when the readyState attribute is changed. This is assigned to the below function.
    function updateChatbox() {
        if (xhr.readyState == 4) { // denotes that the operation is complete
            if(xhr.status == 200) { // If the operation was successful, the status of the response to the request is checked. It returns the HTTP result code. Result code 200 states that the response to the request is successful.
                document.getElementById("chatBox1").value = xhr.responseText; // Change the value of the chatBox2 to receive contents of chat; what is in the row of the UID (name).
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}



/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = receivePlace;


function updateDB() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","getuser.php?q="+str,true);
    xmlhttp.send();
}
*/