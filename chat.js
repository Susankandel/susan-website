let isChatboxVisible = false;
const chatbox = document.querySelector(".WA_Chat_Widget .WA_ChatBox");
function hideChatbox() {
  isChatboxVisible = false;
  chatbox.style.display = "none";
}

function toggleChatbox() {
  isChatboxVisible = !isChatboxVisible;
  chatbox.style.display = isChatboxVisible ? "block" : "none";
}
