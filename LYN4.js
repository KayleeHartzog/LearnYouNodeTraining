var fs = require('fs')
var count = 0;

function getInFile(callback) {
    fs.readFile(process.argv[2], 'utf8' ,function doneReading(err, fileContents) {
        for (let i = 0; i < fileContents.length; i++) {
            if (fileContents[i] == "\n") {
                count++;
            }
        }
        callback()
    });

}

function displayCount() {
    console.log(count)
}

getInFile(displayCount)

