const destination = JSON.parse(localStorage.getItem("destination"));

setTimeout(() => {
    if(destination){
        alert("Navigating to " + destination.block_name);
        speak("Navigation started. Follow the arrow.");
    }
}, 2000);