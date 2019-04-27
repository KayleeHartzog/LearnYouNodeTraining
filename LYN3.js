var fs = require('fs')

var inFile = fs.readFileSync(process.argv[2]).toString();
var count = 0;

for (let i = 0; i < inFile.length; i++) {
    if (inFile[i] == "\n") {
        count++;
    }
}

console.log(count)
