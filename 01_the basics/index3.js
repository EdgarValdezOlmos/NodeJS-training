const superHeroClass = require("./superHeroClass_3");

const superHero = new superHeroClass("Batichika");

console.log(superHero.getName());

superHero.setName("Superchika");
console.log(superHero.getName());

const anotherHero = new superHeroClass("Batibella");
console.log(anotherHero.getName());


 
