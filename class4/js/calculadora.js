let operacion = parseInt(prompt('OPERACIONES \n1 - Suma \n2 - Resta \n3 - Multiplicación \n4 - División'));

switch (operacion){
    case 1:
        Sumar();
        break;
    case 2:
        Restar()
        break;
    case 3:
        Multiplicar();
        break;
    case 4:
        Dividir();
        break;
    default:
        alert('Ingrese un numero valido')
}

function Sumar(){
    let num1 = parseInt(prompt('Escriba el primer numero a sumar'));
    let num2 = parseInt(prompt('Escriba el segundo numero a sumar'))

    let resultado = num1 + num2;

    return alert(`${num1} + ${num2} = ${resultado}`)
}

function Restar(){
    let num1 = parseInt(prompt('Escriba el primer numero a restar'));
    let num2 = parseInt(prompt('Escriba el segundo numero a restar'))

    let resultado = num1 - num2;

    return alert(`${num1} - ${num2} = ${resultado}`)
}

function Multiplicar(){
    let num1 = parseInt(prompt('Escriba el primer numero a multiplicar'));
    let num2 = parseInt(prompt('Escriba el segundo numero a multiplicar'))

    let resultado = num1 * num2;

    return alert(`${num1} * ${num2} = ${resultado}`)
}

function Dividir(){
    let num1 = parseInt(prompt('Escriba el primer numero a dividir'));
    let num2 = parseInt(prompt('Escriba el segundo numero a dividir'))

    let resultado = num1 / num2;

    return alert(`${num1} / ${num2} = ${resultado}`)
}