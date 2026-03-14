// Get destination data from localStorage
const destination = JSON.parse(localStorage.getItem("destination"));

// Voice guidance function
function speak(text) {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US";
        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    } else {
        console.log("Speech synthesis not supported in this browser.");
    }
}

// Start navigation after 2 seconds
setTimeout(() => {
    if (destination) {
        alert("Navigating to " + destination.block_name);
        speak("Navigation started. Follow the arrow.");
    } else {
        alert("No destination selected.");
    }
}, 2000);
