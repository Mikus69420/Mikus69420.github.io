function mixColors() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;

    document.getElementById('result').style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;

}

let result = [];








function generateColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    let hexColor = `#${randomColor}`;
    let rgbColor = hexToRgb(hexColor);

    document.getElementById('RandomColor').style.backgroundColor = hexColor;
    document.getElementById('colorHex').innerText = hexColor;
    document.getElementById('colorRgb').innerText = `RGB(${rgbColor.split(', ').join(',')})`;
}

function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}