document.addEventListener("DOMContentLoaded", function () {

    let darkModeButton = document.querySelector("#toggleDarkMode");

    darkModeButton.addEventListener("click", function (e) {

        document.body.classList.toggle("darkMode");
    });

});