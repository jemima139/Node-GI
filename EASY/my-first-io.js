const fs = require('fs');


const filePath = process.argv[2];


const fileContent = fs.readFileSync(filePath, 'utf8');


const lines = fileContent.split('\n');


const numberOfNewlines = lines.length - 1;


console.log(numberOfNewlines);