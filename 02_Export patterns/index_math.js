// patron 1 
const add1 = require("./math_1");
console.log("patron 1: ", add1(5,7));


//patrón 2
const add2 = require("./math_2");
console.log("patron 2: ", add2(5,7));

//patrón 3
//creando el objeto math
const math3 = require("./math_3");
console.log("patron 3-1: ", math3.adds(5,7));
console.log("patron 3-2: ", math3.substract(5,7));

//patrón 4
//descomponer el objeto desde el inicio. Los nombres de los parametros tienen que coincidir
//con el objeto original

const { adds, substract } = math3;
console.log("patron 4-1: ", adds(5,7));
console.log("patron 4-2: ", substract(5,7));

//patrón 5 -  variación del 4
//descomponer el objeto desde el inicio. Los nombres de los parametros tienen que coincidir
//con el objeto original

const math5 = require("./math_5");
const { add5, substract5 } = math5;
console.log("patron 5-1: ", add5(5,7));
console.log("patron 5-2: ", substract5(5,7));
