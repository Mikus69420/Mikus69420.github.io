function mixColors() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;

    document.getElementById('result').style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
}

