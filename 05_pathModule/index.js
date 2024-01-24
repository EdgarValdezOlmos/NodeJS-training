const path = require("node:path");

console.log(__filename);
console.log(__dirname);

// solo imprime la "última" parte del path
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//imprime extensión 
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

//genera un objeto con la información del path 
console.log(path.parse(__filename));

//retorna un string del path en base a un objeto 
console.log(path.format(path.parse(__filename)));

//concatena la información en formato de path
console.log(path.join("folder1", "folder2", "folder3"));