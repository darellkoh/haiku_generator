var haiku = require("./haiku"); 
var structure = JSON.parse(process.argv[2])
var corpus = process.argv[3]; 

haiku.createHaiku(structure, corpus); 
// node haiku_generator.js [[5],[7],[5]] cmudict.txt; 


