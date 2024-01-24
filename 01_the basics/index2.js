const superHero = require("./superHeroClass");
console.log(superHero.getName());

superHero.setName("Superbubis");
console.log(superHero.getName());

/* module catching:
Se refiere a que si un módulo se carga múltiples veces, en sistema va a cargar desde el 'cache' 
el módulo previamente importado para fines de optimización. 
Por eso en las siguientes lineas, cuando se obtiene el nombre, en vez de tener el default, tiene
el previamente seteado

*/
const anotherHero = require("./superHeroClass");
console.log(anotherHero.getName());
 
