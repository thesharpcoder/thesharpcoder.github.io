function calculate() {
    var inX = document.getElementById("x");
    var inY = document.getElementById("y");
    var op = document.getElementById("o");

    var x = parseInt(inX.value);
    var y = parseInt(inY.value);

    var a = x;

    // switch(op.value) {
    //     case '+':
    //         a = x + y;
    //         break;
    //     case '-':
    //         a = x - y;
    //         break;
    //     case '*':
    //         a = x * y;
    //         break;
    //     case '/':
    //         a = x / y;
    //         break;
    // }

    if (op.value == '+')
        a = x + y;
    else if (op.value == '-')
        a = x - y;
    else if (op.value == '*')
        a = x * y;
    else if (op.value == '/')
        a = x / y;

    var outA = document.getElementById('a');
    outA.value = a.toFixed(2);
}