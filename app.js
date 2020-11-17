//Requires
//const fs=require('./fs'); =>Archivos creados por nosotros mismos
//const fs=require('express'); =>No es una libreria propia de node.js (no nativos)

const argv=require('./config/yargs').argv;
const colors=require('colors/safe');
const {crearArchivo, listarTabla}=require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(mensaje=>console.log(mensaje.cyan))
            .catch(err=>console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo=>console.log("Archivo creado:",colors.green(archivo)))
            .catch(err=>console.log(err));
        break;
    default:
        console.log("Comando no reconocido");
}

/* console.log('Limite ',argv.limite);
console.log(argv);
 */



