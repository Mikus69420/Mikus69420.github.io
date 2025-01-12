let template = { '<>': 'tr', 'html': '<td>${c1}</td><td>${c2}</td><td>${c3}</td><td><input type="color" value="${res}"/></td>' };

let data = [
    // { "c1": 23, "c2": 34, "c3": 128 , res: "#0080C0'"}
];

function mixColors() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;
let hexColor=  rgbToHex(color1,color2,color3);

    data.push({ "c1": color1 , "c2": color2 , "c3": color3, "res": hexColor });

    document.getElementById('result').style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    $('#resulttable tbody').empty();
    $("#resulttable").json2html(data, template);
    document.getElementById("clearColorsButton").style.display = "block";
}

function clearColors() {
    data = [];
    $('#resulttable tbody').empty();
    document.getElementById("clearColorsButton").style.display = "none";
}

function getRandomColor() {
    const randomValue = () => Math.floor(Math.random() * 256);
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function generateRandomColor() {
    const color = getRandomColor();
    document.getElementById('random-color-result').style.backgroundColor = color;
    document.getElementById('random-color-result').innerHTML = color;
}

function showInfo() {
    var div = document.getElementById('info');
    div.style.display = div.style.display == "block" ? "none" : "block";
}

function rgbToHex(red, green, blue) {
    const rgb = (red << 16) | (green << 8) | (blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
  }