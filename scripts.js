function mixColors() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;

    const mixedColor = blendColors(color1, color2, color3);
    document.getElementById('result').style.backgroundColor = mixedColor;
    document.getElementById('result').innerText = `Krāsu miksošanas rezultāts `;
}
function blendColors(color1, color2, color3) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const c3 = hexToRgb(color3);

    const r = Math.round((c1.r + c2.r + c3.r) / 3);
    const g = Math.round((c1.g + c2.g + c3.g) / 3);
    const b = Math.round((c1.b + c2.b + c3.b) / 3);

    return rgbToHex(r, g, b);
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}