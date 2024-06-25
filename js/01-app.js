const sumar = (a,b) => a+b;

const resultado = sumar(2,1)
const esperado = 3;

if (resultado === esperado) {
    console.log(`el test pasó, se esperaba ${esperado}`);
} else{
    console.error("no pasó el test");
}

const restar = (a,b) => a-b;

const res = restar(10,5);
const exp = 4;


if (res !== exp) {
    console.error(`no pasó el testing, se esperaba ${exp}`);
} else{
    console.log(`pasó el testing`);
}


