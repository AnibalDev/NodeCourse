const empleados = [
    {
        id: 1,
        nombre: 'Carlos'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Ada'
    },
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (e) => e.id ===id )
    if ( empleado ) {
        callback( null, empleado )
    } else {
        callback(`Empleado con id ${ id } no existe`)
    }
}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( (e) => e.id === id )
    if ( salario ) {
        callback( null, salario )
    } else {
        callback(`Salario con id ${ id } no exixte`)
    }
}
const id = 5
getEmpleado(id, (err, empleado ) => {
    if ( err ) {
        return console.log(err);
    }
    console.log( empleado );
})
getSalario(id, (err, salario ) => {
    if ( err ) {
        return console.log(err);
    }
    console.log( salario );
})