const container=document.getElementById("container");
const registerBtn= document.getElementById("register");
const loginBtn= document.getElementById("login");
registerBtn.addEventListener("click",() => {
    container.classList.add("active");
});
loginBtn.addEventListener("click",() => {
    container.classList.remove("active");
});

  function toggleMute() {
    var audio = document.getElementById("bgAudio"); // Get the audio element
    var icon = document.getElementById("musicIcon"); // Get the icon element
    
    if (audio.muted) {
      audio.muted = false; // Unmute the audio
      icon.classList.remove('muted'); // Remove line-through decoration
    } else {
      audio.muted = true; // Mute the audio
      icon.classList.add('muted'); // Add line-through decoration
    }
    }