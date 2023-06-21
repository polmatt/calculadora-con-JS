//ESTO AGREGA A LA PANTALLA EL VALOR DEL BOTON QUE TOQUEMOS
function agregar (valor) {
    document.getElementById('pantalla').value += valor
}

//ESTE ELEMENTO ES PARA BORRAR (C)
function borrar () {
    document.getElementById('pantalla').value = ''

}

//ESTE ELEMENTO ES PARA CALCULAR
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado   
    console.log(resultado)
}