// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
var funcionFlecha = function (a, b) { return (a + b) * 2; };
var resultado = funcionFlecha(2, 3);
console.log(resultado);
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + "  tiene el poder de  " + poder + " y un arma " + arma;
    }
    else {
        mensaje = nombre + " +  tiene un " + poder;
    }
    console.log(mensaje);
}
;
getAvenger("Robin Hood", true);
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var rectangulo = /** @class */ (function () {
    function rectangulo() {
    }
    rectangulo.prototype.calculaArea = function (base, altura) {
        return base * altura;
    };
    return rectangulo;
}());
