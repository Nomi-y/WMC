function fetchBook() {
    document.getElementById("output").value = "Fetching data...";

    fetch("/book")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("output").value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("output").value = `Error: ${error.message}`;
        });
}
