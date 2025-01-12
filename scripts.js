let template = {'<>':'div','html':'${c1} ${c2} ${c3} ${res}'};

let data = [
    {"c1":"23","c2":"34","c3":"128","res":"res1"},
    {"c1":"23","c2":"34","c3":"128","res":"res2"},
    {"c1":"23","c2":"34","c3":"128","res":"res3"},    
];

function mixColors() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;

    document.getElementById('result').style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
     $("#resulttable").json2html(data,template);
}

function getRandomColor() {
    const randomValue = () => Math.floor(Math.random() * 256);
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function generateRandomColor() {
    const color = getRandomColor();
    document.getElementById('random-color-result').innerText = color;
    document.getElementById('random-color-result').style.backgroundColor = color;
}

