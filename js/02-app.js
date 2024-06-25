const sumar = (a,b) => a+b;

let resultado = sumar(2,1)
let esperado = 2;

// if (resultado === esperado) {
//     console.log(`el test pasó, se esperaba ${esperado}`);
// } else{
//     console.error("no pasó el test");
// }

async function asyncSuma(a,b){
    return Promise.resolve(sumar(a,b));
} 

// expected(esperado).toBe(resultado);
///////////////////////////////////////
// const restar = (a,b) => a-b;

resultado = sumar(10,5);
esperado = 15;

// expected(resultado).toBe(esperado)
// if (res !== exp) {
//     console.error(`no pasó el testing, se esperaba ${exp}`);
// } else{
//     console.log(`pasó el testing`);
// }
// expected(resultado).toEqual(esperado)

test('test para ver si 10 - 5 es 5',async ()=> {
    const resultado = await asyncSuma(10,5)
    const esperado = 15;
    expected(esperado).toBe(resultado)
})

async function test(mensaje,callback){
    try {
        await callback();
        console.log(`El test de ${mensaje} se realizó correctamente`);
    } catch (error) {
        console.error("Error");
        console.error(error);
    }
}

//funcion de testing
function expected(esperado){
    return{
        toBe(resultado){
            if (resultado === esperado) {
                console.log(`el test  pasó, se esperaba ${esperado}`);
            } else{
                console.error("no pasó el test, es diferente a lo esperado");
            }
        },
        toEqual(resultado){
            if (resultado !== esperado) {
                console.error(`el test no pasó, es diferente  a lo esperado, se esperaba ${esperado}`);
            } else{
                console.log("pasó el test, es igual lo esperado");
            }
        }
    }
}
