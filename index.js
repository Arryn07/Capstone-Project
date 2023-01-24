function changeColor (el) {
    document.getElementById("img-banner").style.backgroundColor = el.value;
}

function changeText() {
    let placeholderName = document.getElementById("img-banner");
    let athleteName = document.getElementById("athlete-name");

    placeholderName.innerHTML = athleteName.value;
}