const http = require("node:http");
const fs  = require("node:fs");

const server = http.createServer((req,res) => {
    //Sending plain text as response
    //res.writeHead(200, {"Content-Type": "text/plain"});
    //res.end("Hello world");

    //Sending JSON as response
    // const superHero = {
    //     firstName: "Eddie",
    //     lastName: "Valdi",
    // };
    // res.writeHead(200, {"Content-Type": "application/json"});
    // res.end(JSON.stringify(superHero));

    //Sending HTML as response
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/index.html").pipe(res);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});