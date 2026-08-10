const body = document.getElementById("dark");
const button = document.getElementById("darkkBtn");
const title = document.getElementById("drkTitle");

button.addEventListener("click", function () {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        button.innerText = "Click To Light";
        title.innerText = "Dark Theme";
    } else {
        button.innerText = "Click To Dark";
        title.innerText = "Light Theme";
    }
});