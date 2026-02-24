fetch("http://localhost:5001/api/blocks")
.then(res => res.json())
.then(data => {
    const dropdown = document.getElementById("destinationDropdown");

    data.forEach(block => {
        const option = document.createElement("option");
        option.value = block.block_id;
        option.textContent = block.block_name;
        dropdown.appendChild(option);
    });

    window.blocksData = data;
});