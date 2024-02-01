const fs = require("node:fs");

console.log("First");
//To read a file syncronously. System will wait until operation is completed
const fileContent = fs.readFileSync("./hello.txt","utf-8");
console.log(fileContent);

console.log("Second");
//To read a file asyncronously. System won't wait and proceed with flow. 
//Once operation is completed, the callback function will be executed

fs.readFile("./hello.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});

console.log("Third");

//Writing into a file syncronously
fs.writeFileSync("./greet.txt", "Writing my own file");

//Writing async. File will be overwritten by default. Flag is to append the text

fs.writeFile("./greet.txt", " Writing an async file", {flag: "a"}, (error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("file written");
    }
});
