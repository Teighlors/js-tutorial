document.addEventListener("DOMContentLoaded", function() {
    const xmlFilePath = "products.xml";

    fetch(xmlFilePath)
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "application/xml");

            const products = xmlDoc.getElementsByTagName("product");
            const tableBody = document.querySelector("#productTable tbody");

            Array.from(products).forEach(product => {
                const name = product.getElementsByTagName("name")[0].textContent;
                const price = product.getElementsByTagName("price")[0].textContent;
                const quantity = product.getElementsByTagName("quantity")[0].textContent;
                const description = product.getElementsByTagName("description")[0].textContent;

                const row = tableBody.insertRow();
                row.insertCell(0).textContent = name;
                row.insertCell(1).textContent = price;
                row.insertCell(2).textContent = quantity;
                row.insertCell(3).textContent = description;
            });
        })
        .catch(error => console.error("Error fetching XML file:", error));
});

function searchProduct() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    const table = document.getElementById("productTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const productName = cells[0].textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
