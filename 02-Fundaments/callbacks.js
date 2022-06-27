// setTimeout( function() {
//     console.log('Hola Mundo')
// }, 1000 );

const getUserByID = ( id, callback) => {
    const user = {
        id,
        nombre: 'Anibal'
    }

    setTimeout( () => {
        callback(user)
    }, 1500)
}
getUserByID(10, (user)  => {
    console.log(user.id);
    console.log(user.nombre.toUpperCase())
});