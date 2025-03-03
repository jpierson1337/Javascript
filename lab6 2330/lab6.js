document.addEventListener("DOMContentLoaded", function () {
    // Using AJAX to get data from ajax.txt
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax.txt", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("ajax").innerText = xhr.responseText;
        }
    };
    xhr.send();

    // Using Fetch API to get data from fetch.txt
    fetch("fetch.txt")
        .then(response => response.text())
        .then(data => {
            document.getElementById("fetch").innerText = data;
        })
        .catch(error => console.error("Fetch error:", error));
});
