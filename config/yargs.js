
const opc={
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{  
        default: 10,
        alias: 'l'
    }
}

const argv=require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar',opc)
                .command('crear','Genera un archivo .txt con una tabla de multiplicar',opc)
                .help()
                .argv;

module.exports={
    argv
}