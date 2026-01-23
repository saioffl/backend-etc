// Buffer.alloc(10);       // allocate memory
// Buffer.from("data");   // from string
// buffer.length;         // size in bytes1

const buf = Buffer.alloc(5) ;
buf.write("Hello")
console.log(buf.toString()) ;