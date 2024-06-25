
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    gualdalEmail(email){
        console.log(`guardando Email`);
        info.email = email
    }
})

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Email del cliente ${info.nombre} es ${info.email}`);
    }
})
const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})
const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto} `);
    }
})

function Cliente(nombre,email,empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info),
    )
}    

function Empleado(nombre,email,puesto){
    let info ={
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info),
    )
}    

const cliente1 = new Cliente('camilo',null,'cualquiera');
cliente1.mostrarNombre();
cliente1.gualdalEmail("camilo@gmail.com")
cliente1.mostrarEmail();
cliente1.mostrarEmpresa();
console.log("~~~");
const empleado2 = new Empleado('Carlos',null,'barrendero')
empleado2.mostrarNombre()
empleado2.gualdalEmail('carlito@gmail.com');
empleado2.mostrarEmail()
empleado2.mostrarPuesto()































