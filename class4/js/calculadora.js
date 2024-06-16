let k = 0;
while (k == 0){
    const opcion = parseInt(prompt('OPERACIONES \n1 - Suma \n2 - Resta \n3 - Multiplicación \n4 - División \n5 - Salir'));

    switch (opcion){
        case 1:
            sumar();
            break;
        case 2:
            restar()
            break;
        case 3:
            multiplicar();
            break;
        case 4:
            dividir();
            break;
        case 5:
            k = 1;
            break;
        default:
            alert('Ingrese un numero valido')
    }
}


function obtenerNumeros(operacion){
    const num1 = parseInt(prompt(`Escriba el primer numero a ${operacion}`));
    const num2 = parseInt(prompt(`Escriba el segundo numero a ${operacion}`));
    
    return [num1, num2];
}

function sumar(){
    const [num1, num2] = obtenerNumeros('sumar')
    const resultado = num1 + num2;

    return alert(`${num1} + ${num2} = ${resultado}`)
}

function restar(){
    const [num1, num2] = obtenerNumeros('restar')
    const resultado = num1 - num2;

    return alert(`${num1} - ${num2} = ${resultado}`)
}

function multiplicar(){
    const [num1, num2] = obtenerNumeros('multiplicar')
    const resultado = num1 * num2;

    return alert(`${num1} * ${num2} = ${resultado}`)
}

function dividir(){
    const [num1, num2] = obtenerNumeros('dividir')
    const resultado = num1 / num2;

    return alert(`${num1} / ${num2} = ${resultado}`)
}