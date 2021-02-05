//Desarrolle un algoritmo que permita determinar el área y volumen de un cilindro 
//dado su radio {R) y altura (H). 
//Fórmula: (VOL = π * R^2 + H), (AREA = 2 * π * R * H)

let radio = parseInt(prompt(`Ingrese el radio: `));
let altura = parseInt(prompt(`Ingrese el altura: `));
let volumen = 0;
let area = 0;
function calculo_volumen(r,h) {
    volumen = Math.PI*Math.pow(r,2)*h;
    return console.log(`El volumen del cilindro es: ` +Math.round(volumen,2));
}

function calculo_area(r,h) {
    area = 2*Math.PI* r * h;
    return console.log(`El área lateral de superficie del cilindro: `+Math.round(area, 2));
}

calculo_area(radio, altura);
calculo_volumen(radio, altura);