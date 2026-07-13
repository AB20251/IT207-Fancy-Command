//Import the file system module
const fs = require('fs');
const path = require('path');

//Verify the correct invocation of the script
if (process.argv.length !== 3) {
    console.log('Missing arguments');
    console.log(`Usage: node ${path.basename(__filename)} <folder name>`);
    console.log('Input your folder name in parentheses');
    return;
}

//Get the folder name from the command line
const folderName = process.argv[2];

//implement error handling to check if the folder exists.
try {
    fs.readdirSync(folderName);
} catch (err) {
    console.error('Folder does not exist');
    return;
}

//if we can read the folder contents, then store it in files.
const files = fs.readdirSync(folderName);

//Display the folder contents

let output = `List of files and folders in ${path.basename(folderName)}:\n`;
for (let i = 0; i < files.length; i++) {
    output += `${files[i]}\n`;
}
console.log(output);

//Display the total number of count of files and folders in the folder
console.log('Total number of count:', files.length);

//implement a message if your folder count is low or high.
if (files.length === 0) {
    console.log('Your folder is empty');
} else if (files.length < 10) {
    console.log('Your folder has a low number of count');
} else if (files.length < 20) {
    console.log('Your folder has a moderate number of count');
} else {
    console.log('Your folder has a high number of count');
}