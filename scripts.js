function mixColors() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;

    const mixedColor = blendColors(color1, color2, color3);
    document.getElementById('result').style.backgroundColor = mixedColor;
    document.getElementById('result').innerText = `Krāsu miksošanas rezultāts `;
}
function blendColors(color1, color2, color3) {
    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);
    const [r3, g3, b3] = hexToRgb(color3);

    const r = Math.round((r1 + r2 + r3) / 3);
    const g = Math.round((g1 + g2 + g3) / 3);
    const b = Math.round((b1 + b2 + b3) / 3);

    return rgbToHex(r, g, b);
}

function hexToRgb(hex) {
    const int = parseInt(hex.slice(1), 16);
    const r = (int >> 16) & 255;
    const g = (int >> 8) & 255;
    const b = int & 255;
    return [r, g, b];
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
