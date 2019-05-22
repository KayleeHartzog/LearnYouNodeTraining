var fs = require('fs')
let fileArray = []

function getInFile(directory, extension, callback) {
    fs.readdir(directory, 'utf8' ,function doneReading(err, fileContents) {
        if (err){
            return callback(err)
        }
        let tempArray = fileContents
        let temp = "." + extension
        fileArray = tempArray.filter(file => file.includes(temp))
        return callback(null, fileArray)
    });

}

module.exports = getInFile;
