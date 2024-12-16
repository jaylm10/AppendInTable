let arr = [];
document.getElementById("submit").addEventListener("click", () => {
    let input = document.getElementById("input").value;
    arr.push(input);

    // Create table content dynamically
    let tableContent = `
        <table>
            <tr>
                <th>Name</th>
            </tr>
    `;

    for (let i = 0; i < arr.length; i++) {
        tableContent += `
            <tr>
                <td>${arr[i]}</td>
            </tr>
        `;
    }

    tableContent += `</table>`;
    document.getElementById("table").innerHTML = tableContent;
});
