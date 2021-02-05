//Desarrolle un algoritmo que permita leer dos números y ordenarlos de menor a mayor, si es el caso.
let num1 = parseInt(prompt(`Ingrese el número 1:`));
let num2 = parseInt(prompt(`Ingrese el número 2:`));

if(num1>num2){
    console.log(`${num2}, ${num1}`);
}else{
    console.log(`${num1} , ${num2}`);
}