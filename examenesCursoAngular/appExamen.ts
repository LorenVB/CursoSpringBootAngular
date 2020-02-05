// Uso de Let y Const
let nombre= "Ricardo Tapia";
let edad=23;
const PERSONAJE= {
    nombre:nombre,
    edad:edad
}
 
 interface Batman{
     nombre:string;
     artesMarciales:string[];
     }
// Cree una interfaz que sirva para validar el siguiente objeto
let batman:Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
 

// Convertir esta funcion a una funcion de flecha
let funcionFlecha= (a,b)=> (a+b)*2;

let resultado= funcionFlecha(2,3);
console.log(resultado);

 
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:boolean, arma:string="arco" ){
  let mensaje;
  if( poder ){
     mensaje = `${ nombre }  tiene el poder de  ${poder} y un arma ${arma}`;
  }else{
     mensaje = `${nombre} +  tiene un ${poder}`;
  }
  console.log(mensaje);
};

getAvenger("Robin Hood",true);
 
 
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class rectangulo{
    base:number;
    altura:number

    calculaArea(base:number, altura: number): number{
        return base*altura;
    }
}