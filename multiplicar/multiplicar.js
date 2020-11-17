
//const { Resolver } = require('dns');
const fs=require('fs');
const colors=require('colors');

let listarTabla=(base,limite=10)=>{
    return new Promise((resolve,reject)=>{
        
        if(!Number(base)){
            reject('Error: la base no es un numero');
            return;
        }
        if(!Number(limite)){
            reject('Error: el limite no es un numero');
        }
        
        let mensaje=generarContenido(base,limite);
        
        resolve(mensaje);
    });
}

let crearArchivo=(base,limite=10)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject('El valor introducido no es un numero');
            return;
        }
        if(!Number(limite)){
            reject('Error: el limite no es un numero');
        }
     
        let contenido=generarContenido(base,limite);
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {
            if (err) reject(err)
            else
            resolve(`tabla-${base}-${limite}.txt`);
        });
    });
}

let generarContenido=(base,limite)=>{
    let mensaje=`----Tabla de multiplicar de ${base}----\n`;
    if(limite<0){
        for(let i=0;i>=limite;i--){
            mensaje+=`\t${base} * ${i} = ${base*i}`;
            if(i!=limite){
                mensaje+='\n';
            }
        }
    }
    else{
        for(let i=0;i<=limite;i++){
            mensaje+=`\t${base} * ${i} = ${base*i}`;
            if(i!=limite){
                mensaje+='\n';
            }
        }
    }
    return mensaje;
}

module.exports={
    crearArchivo,
    listarTabla
}