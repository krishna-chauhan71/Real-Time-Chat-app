const socket = io();

const nameInput = document.getElementById("name");
const joinBtn = document.getElementById("joinBtn");
const chatbox = document.getElementById("chatBox");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn"); 

let username = "";
joinBtn.addEventListener("click", 
    function(){
        username = nameInput.value.trim();
        if(username==="")
        {
            alert("Enter your name");
            return;
        }
        alert("you join as"+username);
    }
);
sendBtn.addEventListener("click",
    function(){
        const msg = messageInput.value.trim();
        if(msg==="")
        {
            alert("please write your message");
            messageInput.focus();
            return;
        }
        socket.emit("chat message",{
            name: username || "Anonymous",
            text: msg
        });
        messageInput.value = "";
    }
);
socket.on("chat message", 
    function(data){
        const p = document.createElement("P");
        p.innerText = data.name + " : "+data.text;
        chatBox.append(p);
    }
);