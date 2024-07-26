const num = prompt("Ingrese un numero positivo");
positiveNumber(num);

function positiveNumber(num) {
    try {
        if (isNaN(num)) throw "not a number";
        if (num == "") throw "empty";

        num = parseInt(num);

        if (num < 0) throw "negative";

        if (num === 0) throw "zero";
    } catch (err) {
        alert("Number is " + err);
    }
}
