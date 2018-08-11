function Calc() {
    //При нажатии на кнопки в поле ввода появляются цифры.
    this.numbers = document.getElementsByClassName("number");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", () => {
            document.getElementById('inp').value += numbers[i].outerText;
            document.getElementById('inp').focus();
        });
    };

    //При нажатии на кнопки в поле ввода появляются математические символы.
    this.symbols = document.getElementsByClassName("symbol");
    for (let i = 0; i < symbols.length; i++) {
        symbols[i].addEventListener("click", () => {
            if (symbols[i].outerText === "x") document.getElementById('inp').value += "*";
            else if (symbols[i].outerText === "÷") document.getElementById('inp').value += "/";
            else document.getElementById('inp').value += symbols[i].outerText;
            document.getElementById('inp').focus();
        });
    };
        
    //Удаление символа при нажатии на кнопку
    this.del = del.addEventListener("click", () => {
        document.getElementById("inp").value = document.getElementById("inp").value.slice(0, -1);
        document.getElementById('inp').focus();
    });

    //Реализация механизма вычисления выражения после нажатия на клавишу =
    this.equal = equal.addEventListener("click", () => {
        //принимает значение, введенное пользователем после нажатия на знак =
        let result = document.getElementById('inp').value;
        //проверяет наличие знака ^ в строке
        if (~result.indexOf("^")) {
            let array = result.split("");
            let firstnumber = [];
            let secondnumber = [];
            // ищет число, которое стояло до знака ^, отбрасывая не цифры, чтобы понять величину аргумента
            for (var i = result.indexOf("^") - 1; i >= 0; i--) {
                if (/([0-9.])/.test(array[i])) {
                    firstnumber.unshift(array[i]);
                    continue;
                }
                    break;
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
            let deleteCount = 1 + firstnumber.length + secondnumber.length;
            firstnumber = firstnumber.join("");
            secondnumber = secondnumber.join("");
            array.splice(i+1, deleteCount, Math.pow(firstnumber, secondnumber));
            result = array.join("");
        }
        // считывает код из строки и выводит его обратно в поле input
        document.getElementById('inp').value = eval(result);
        document.getElementById('inp').focus();
    });

    //Поле input разрешает вводить только цифры и арифметические символы
    inp.onkeyup = function() {
        //увидев равно, начинает считать
        if (/[^0-9.+()-=/*√^]/.test(document.getElementById("inp").value)) {
            let newarray = document.getElementById("inp").value.split("");
            newarray.length -= 1;
            document.getElementById("inp").value = newarray.join("");
        }
        //заменяет запятую на точку
        else if (/,/.test(document.getElementById("inp").value)) {
            let newarray = document.getElementById("inp").value.split("");
            newarray.splice(newarray.length-1, 1, ".");
            document.getElementById("inp").value = newarray.join("");
        }
    };
    
};

let calc = Calc ();