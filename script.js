const add = document.getElementById("add");
let table = document.getElementById("table");


let tbody = table.querySelector("tbody");

function clickButn() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (!name || !age) {
        alert("Please fill in both fields.");
        return; 
    }

    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
    `;

    tbody.appendChild(tr); 

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

// Trigger clickButn when the Enter key is pressed in either input field
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        clickButn();
    }
});

// Trigger clickButn when the "Add" button is clicked
add.addEventListener('click', () => {
    clickButn();
});
