const fs = require("node:fs");

const readableStream = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    highWaterMark: 2,  //To define the size of bytes for the buffer. Can be left empty to use the default
});

const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
});