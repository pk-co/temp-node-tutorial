//GLOBAL - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJs)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname); //C:\Users\Prasa\Desktop\Tutorial
console.log(__filename); //C:\Users\Prasa\Desktop\Tutorial\app.js

setInterval(() => {
  console.log("Hello World!");
}, 1000);

setTimeout(() => {
  console.log("After 3 Seconds!");
}, 3000);
