let nombre = prompt('Ingrese su nombre:');
let edad = prompt('Ingrese su edad :');
document.write('Hola');
document.write(nombre);
document.write('asi que tienes');
document.write(edad);
document.write('años');
var boton = document.getElementById('btn');
boton.addEventListener('click', function () {
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var option = n1 + n2;
    document.getElementById('resultado').textContent = 'El resultado es:' + option;
})