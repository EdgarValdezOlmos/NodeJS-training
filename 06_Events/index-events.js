// se tiene que importar el módule de events propio de nodejs
const EventEmitter = require("node:events"); //devuelve una clase

//instanciar la clase
const emitter = new EventEmitter();

//Crear la condición para ejecutar una función al recibir un evento
//Se recive la condicional y la función a ejecutar
emitter.on("order-pizza", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

//puede haber mas de un listener suscrito al mismo evento
emitter.on("order-pizza", (size) => {
    if(size === "large"){
        console.log("Serving complementary drink");
    }
})

//los listeners solo se van a ejecutar hasta que el evento llegue
console.log("May I take your order?");

//emitir el mensaje
emitter.emit("order-pizza", "small", "mushrooms");

