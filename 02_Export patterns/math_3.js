// patrón para exportar 3

const adds = (a, b) => 
{
    return a + b;
};

const substract = (a, b) => 
{
    return a - b;
};

//Agregando multiples parametros al objeto exports
module.exports = 
{
    adds,
    substract,
};