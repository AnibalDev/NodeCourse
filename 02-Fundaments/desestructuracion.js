const Taliyah = { 
    nombre: 'Taliyah',
    nickname: 'Little Sparrow',
    ultimate: 'Weaver\'s Wall'
}
const Malzahar = { 
    nombre: 'Malzahar',
    nickname: 'Void\'s Prophet',
    ultimate: 'Nether Grasp'
}
const Sejuani = { 
    nombre: 'Sejuani',
    nickname: 'Pig',
    ultimate: 'Permafrost'
}

function imprimePersonaje( {nombre, nickname, ultimate } ) {
    console.log( nombre, nickname, ultimate );
}

imprimePersonaje(Taliyah)
