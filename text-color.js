var text = document.getElementById("content");
var str = text.innerHTML,
    reg = /red|blue|green|orange/ig; //g is to replace all occurances
var toStr = String(reg);
var color = (toStr.replace('\/g', '|')).substring(1);

//쪼개지는 부분 색깔
var colors = color.split("|");

if (colors.indexOf("red") > -1) {
    str = str.replace(/t/g, '<span style="color:red;">t</span>');
}

if (colors.indexOf("blue") > -1) {
    str = str.replace(/e/g, '<span style="color:blue;">e</span>');
}

if (colors.indexOf("green") > -1) {
    str = str.replace(/x/g, '<span style="color:green;">x</span>');
}


document.getElementById("updated").innerHTML = str;
