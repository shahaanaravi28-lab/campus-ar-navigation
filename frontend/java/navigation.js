function startNavigation() {

    const dropdown = document.getElementById("destinationDropdown");
    const selectedId = dropdown.value;

    if (!selectedId) {
        alert("Please select destination");
        return;
    }

    const destination = window.blocksData.find(
        block => block.block_id == selectedId
    );

    localStorage.setItem("destination", JSON.stringify(destination));

    window.location.href = "ar.html";
}
