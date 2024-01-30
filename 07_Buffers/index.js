const MyBuffer = new Buffer.from("Edgar");


console.log(MyBuffer.toString());
console.log(MyBuffer);
console.log(MyBuffer.toJSON());

MyBuffer.write("Penelope");
console.log(MyBuffer.toString());