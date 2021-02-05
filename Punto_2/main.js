//Determinar la hipotenusa de un triángulo rectángulo conocidas 
//las longitudes de sus dos catetos. Desarrolle el algoritmo correspondiente. 
//Fórmula: (HIP = √CATa + CATb)

let cateto_a = parseInt(prompt("Ingrese el cateto a"));
let cateto_b = parseInt(prompt("Ingrese el cateto b"));
let hipotenusa = 0;
function calcular_h(a, b){
    hipotenusa = Math.sqrt(Math.pow(2,a)+Math.pow(2,b));
    return console.log(`El valor del cateto A es ${a} y el valor del cateto B es ${b}. El valor de la hipotenusa es: ` + Math.round(hipotenusa,2));
}
calcular_h(cateto_a,cateto_b);