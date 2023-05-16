function fadein(image) {
    const devle = image.nextElementSibling.nextElementSibling;
    devle.style.display = "block";
    console.log(devle);

}

function fadeout(image) {
    const devle = image.nextElementSibling.nextElementSibling;
    devle.style.display = "none";
}
