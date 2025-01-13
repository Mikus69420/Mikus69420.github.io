let gradientcolor1 = document.querySelector("#c1");
let gradientcolor2 = document.querySelector("#c2");
let gradientCont = document.querySelector("#gradient-cont");
let btn = document.querySelector("#randomColorBtn");

function makeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function generateGradient() {
    gradientcolor1.value = "#" + makeColor();
    gradientcolor2.value = "#" + makeColor();
    gradientCont.style.background = `linear-gradient(${gradientcolor1.value}, ${gradientcolor2.value})`;
}

function setGradient() {
    gradientCont.style.background = `linear-gradient(${gradientcolor1.value}, ${gradientcolor2.value})`;
}

document.body.addEventListener("load", generateGradient());
gradientcolor1.addEventListener("input", setGradient);
gradientcolor2.addEventListener("input", setGradient);
btn.addEventListener("click", generateGradient); 