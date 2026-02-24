let currentLocation = {x: 100, y: 100};

function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        alert("Location Captured!");
        currentLocation = {
            x: Math.random() * 500,
            y: Math.random() * 500
        };
    });
}