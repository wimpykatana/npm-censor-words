var c = require("./censortext.js")

console.log(c.censor("im mad with your"));
c.addCustomCensorWords("coba");

//var a = c.getCensorWords();
console.log(c.getCensorWords());
console.log(c.censor("im mad with your coba andai kan kau tau hanya sad"));

