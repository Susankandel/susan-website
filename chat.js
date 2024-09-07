let isChatboxVisible = false;
const chatbox = document.querySelector(".WA_Chat_Widget .WA_ChatBox");

function hideChatbox() {
  isChatboxVisible = false;
  chatbox.style.display = "none";
}

function toggleChatbox() {
  isChatboxVisible = !isChatboxVisible;
  chatbox.style.display = isChatboxVisible ? "block" : "none";

  if (isChatboxVisible) {
    // Reset the animation when the chatbox is opened
    document.getElementById("typingAnimation").style.display = "flex";
    document.getElementById("messageContent").style.display = "none";

    // Display the typing animation for 2 seconds
    setTimeout(function () {
      // Hide the typing animation
      document.getElementById("typingAnimation").style.display = "none";

      // Show the message content
      document.getElementById("messageContent").style.display = "block";
    }, 2000); // 2000ms = 2 seconds
  }
}
// Time
let time = document.getElementById("current-time");
let d = new Date();

// Format time in 24-hour format
time.innerHTML = d.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
