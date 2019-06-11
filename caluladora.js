'use strict'
var params=process.argv.slice(2);
let numer1=parseFloat(params[0]);
let numer2=parseFloat(params[1]);

let plantilla=
`La suma es : ${numer1 +numer2}
la resta es: ${numer1-numer2}
la multiplicacion: ${numer1*numer2}
la division: ${numer1/numer2}
`
console.log(numer1+numer2)
console.log(plantilla)
console.log("Hola nodejs vv pino :D ");