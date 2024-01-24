const check = document.getElementById('checkbox');
const count = document.getElementById('countdown');

let color = "white";

check.addEventListener('change', () => {

    document.body.classList.toggle('light');

    if (color === "white") {
        count.style.color = "#000000";
        color = "black"
    } else {
        count.style.color = "#FFFFFF"
        color = "white"
    }

});