function plus() {
    document.getElementById('inp').value+='+';
}

function minus() {
    document.getElementById('inp').value+='-';
}

function multiply() {
    document.getElementById('inp').value+='x';
}

function divide() {
    document.getElementById('inp').value+='÷';
}

function exp() {
    document.getElementById('inp').value+='^';
}

function root() {
    document.getElementById('inp').value+='√';
}

function result() {}

document.getElementsByTagName('input')[0].onkeypress = function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
      return false;
    }
  }
  function getChar(event) {
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode) // IE
    }
    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which) // остальные
    }
    return null; // специальная клавиша
  }