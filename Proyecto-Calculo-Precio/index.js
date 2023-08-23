const txtOp1 = document.getElementById("op1")
const txtOp2 = document.getElementById("op2")
const txtOp3 = document.getElementById("op3")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular)

function calcular(){
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)
    const op3 = parseFloat(txtOp3.value)

    let resultado = (op2 * op3) / op1 ;
        pResultado.style="color:white"
        pResultado.innerText = "Total = $ " + Math.round(resultado)
}

