function startNavigation() {

    const selected = document.getElementById("destinationDropdown").value;
    const block = window.blocksData.find(b => b.block_id === selected);

    if(!block) {
        alert("Select destination!");
        return;
    }

    document.getElementById("blockDetails").innerHTML =
        `<h3>${block.block_name}</h3>
         <p>Floors:</p>
         ${block.floors.map(f => `<p>Floor ${f.floor_no} - ${f.details}</p>`).join("")}`;

    localStorage.setItem("destination", JSON.stringify(block));

    window.location.href = "ar.html";
}
