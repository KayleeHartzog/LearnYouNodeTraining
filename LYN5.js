var fs = require('fs')
let fileArray = []

function getInFile(callback) {
    fs.readdir(process.argv[2], 'utf8' ,function doneReading(err, fileContents) {
        let tempArray = fileContents
        let temp = "." + process.argv[3]
       // console.log(temp)
        fileArray = tempArray.filter(file => file.includes(temp))
      //  console.log(fileArray)
        callback()
    });

}

function displayFolders() {
    fileArray.forEach(function(file) {
        console.log(file)
    })
}

getInFile(displayFolders)
