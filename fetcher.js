(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>resp.json());
    let sel = Math.round(Math.random() * 10);
    record = response[sel];

    authorNode = document.createElement("div")
    authorNode.className = "author-details";
    document.querySelector(".main-body").appendChild(authorNode);
    authorNode.innerHTML = `
    <p> Author information details</p>
    <table>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone number</th>
    <th>Company name</th>
    </tr>
    <tr>
    <td>${record.name}</td>
    <td><a href="mailto:${record.email}">${record.email}</a></td>
    <td>${record.phone}</td>
    <td>${record.company.name}</td>
    </tr>
    </table>
    `;

})();

