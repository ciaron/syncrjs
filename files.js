const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        const fullPath = path.join(dirPath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.resolve(fullPath));
        }
    });

    return arrayOfFiles;
}

// Usage
const directoryPath = '/home/ciaron/syncr/IMAGES'; // replace with your directory path
const files = getAllFiles(directoryPath);

console.log(files);

