console.log('Inicio del programa'); // 1

setTimeout(() => {
    console.log('Primer Timeout') //4
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout') //2
}, 0);

setTimeout(() => {
    console.log('Tercer Timeout') //2
}, 0);

console.log('Final del programa'); //3