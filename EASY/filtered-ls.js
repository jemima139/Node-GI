const fs = require('fs');
const path = require('path');


const dirPath = process.argv[2];
const fileExtension = process.argv[3];


fs.readdir(dirPath, (err, list) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
    }

    
    const filteredFiles = list.filter(file => path.extname(file) === `.${fileExtension}`);

    
    filteredFiles.forEach(file => console.log(file));
});