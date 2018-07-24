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
    //принимает значение, введенное пользователем после нажатия на знак =
    var result = document.getElementById('inp').value;
    //проверяет наличие знака ^ в строке
    if (result.indexOf("^") + 1) {
        var array = result.split("");
        var firstnumber = [];
        var secondnumber = [];
        // ищет число, которое стояло до знака ^, отбрасывая не цифры, чтобы понять величину аргумента
        for (var i = result.indexOf("^") - 1; i >= 0; i--) {
            if (/([0-9.])/.test(array[i])) {
                firstnumber.unshift(array[i]);
                continue;
            }
            else {
                break;
            }
        }
        // ищет число после знака ^, отбрасывая не цифры, чтобы понять величину степени
        for (var j = result.indexOf("^") + 1; j < array.length; j++) {
            if (/([0-9.])/.test(array[j])) {
                secondnumber.unshift(array[j]);
                continue;
            }
            else {
                break;
            }
        }
        //считает сколько символов будет заменено на функцию Math.pow()
        var deleteCount = 1 + firstnumber.length + secondnumber.length;
        firstnumber = firstnumber.join("");
        secondnumber = secondnumber.join("");
        array.splice(i+1, deleteCount, Math.pow(firstnumber, secondnumber));
        result = array.join("");
    }
    // считывает код из строки и выводит его обратно в поле input
    document.getElementById('inp').value = eval(result);
    document.getElementById('inp').focus();
}

inp.onkeyup = function() {
    //поле input разрешает вводить только определенные символы
    var regexp = /[^0-9.+()-/*^]/;
    if (regexp.test(document.getElementById("inp").value)) {
        var newarray = document.getElementById("inp").value.split("");
        newarray.length -= 1;
        document.getElementById("inp").value = newarray.join("");
    }
    //заменяет запятую на точку
    else if (/,/.test(document.getElementById("inp").value)) {
        var newarray = document.getElementById("inp").value.split("");
        newarray.splice(newarray.length-1, 1, ".");
        document.getElementById("inp").value = newarray.join("");
    }
}
