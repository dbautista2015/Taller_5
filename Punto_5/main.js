//Desarrolle un algoritmo para la empresa Constructora Tecnovivir Casas C.A., que le permita calcular e 
//imprimir la nómina para su cancelación a un total de 50 obreros calificados
// a quienes debe cancelar por horas trabajadas. 
//La hora trabajada se pautó en 30.000 Bolívares.

let n = parseInt(prompt(`Ingrese el número de obreros para calcular la nómina`));
let nomina =[];
let total_nomina =0;
for (let i = 0; i<n;i++){
    let horas = parseInt(prompt(`Ingrese las horas trabajadas`));
    let nombre =prompt(`Ingrese el nombre del empleado`);
    nomina.push([nombre,horas * 30000]);
}
for(let valor of nomina){
    console.log(`${valor[0]} gana ${valor[1]}`);
    total_nomina+=valor[1];
}
console.log(nomina);
console.log(`El valor de la nomina es:${total_nomina}`);
