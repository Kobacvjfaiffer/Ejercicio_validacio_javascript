/*
const numeroDiasemana = prompt('Ingrese el día de la semana').trim();


switch(numeroDiasemana) {

    case '1':
        console.log("Lunes");
        break;

    case '2':
        console.log("Martes");
        break;

    case '3':
        console.log("Miercoles");
        break;

    case '4':   
        console.log("Jueves");
        break;

    case '5':
        console.log("Viernes");
        break;
                
    case '6':
        console.log("Sabado");
        break;
        
    case '7':  
        console.log("Domingo");
        break;
      default:
        console.log("indique un numero correcto");

}*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese el día de la semana: ', (numeroDiasemana) => {
    numeroDiasemana = numeroDiasemana.trim();

    switch (numeroDiasemana) {
        case '1':
            console.log("Lunes");
            break;
        case '2':
            console.log("Martes");
            break;
        case '3':
            console.log("Miércoles");
            break;
        case '4':
            console.log("Jueves");
            break;
        case '5':
            console.log("Viernes");
            break;
        case '6':
            console.log("Sábado");
            break;
        case '7':
            console.log("Domingo");
            break;
        default:
            console.log("Indique un número correcto");
    }

    readline.close();
});