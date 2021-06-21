var text = document.getElementById("content");
var str = text.innerHTML,
    reg = /red|blue|green|orange/ig; //g is to replace all occurances

//fixing a bit
var toStr = String(reg);
var color = (toStr.replace('\/g', '|')).substring(1);

//split it baby
var colors = color.split("|");

if (colors.indexOf("red") > -1) {
    str = str.replace(/sweet/g, '<span style="color:red;">sweet</span>');
}

if (colors.indexOf("blue") > -1) {
    str = str.replace(/home/g, '<span style="color:blue;">home</span>');
}

if (colors.indexOf("green") > -1) {
    str = str.replace(/heart/g, '<span style="color:green;">heart</span>');
}

if (colors.indexOf("orange") > -1) {
    str = str.replace(/the/g, '<span style="color:orange;">the</span>');
}


document.getElementById("updated").innerHTML = str;
