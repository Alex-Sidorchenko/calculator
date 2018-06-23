btn1.onclick = function() {
    document.getElementById('inp').value+='+';
    document.getElementById('inp').focus();
}

btn2.onclick = function() {
    document.getElementById('inp').value+='-';
    document.getElementById('inp').focus();
}

btn3.onclick = function() {
    document.getElementById('inp').value+='*';
    document.getElementById('inp').focus();
}

btn4.onclick = function() {
    document.getElementById('inp').value+='/';
    document.getElementById('inp').focus();
}

btn5.onclick = function() {
    document.getElementById('inp').value+='^';
    document.getElementById('inp').focus();
}

btn6.onclick = function() {
    document.getElementById('inp').value+='√';
    document.getElementById('inp').focus();
}

btn7.onclick = function() {
    var result = document.getElementById('inp').value;
    document.getElementById('inp').value = eval(result);
    document.getElementById('inp').focus();
}
