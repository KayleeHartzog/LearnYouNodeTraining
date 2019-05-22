var fs = require('fs')
let fileArray = []


function getInFile(directory, extension, callback) {
    fs.readdir(directory, 'utf8' ,function doneReading(err, fileContents) {
        if (err){
            // console.log("did I get an error?")
            return callback(err)
        }
        // console.log("I got in here")
        let tempArray = fileContents
        let temp = "." + extension
        // console.log(temp)
        fileArray = tempArray.filter(file => file.includes(temp))
        // console.log(fileArray)
        return callback(null, fileArray)
    });

}

module.exports = getInFile;

// module.exports.getInFile = function (callback) {
//     fs.readdir(process.argv[2], 'utf8' ,function doneReading(err, fileContents) {
//         let tempArray = fileContents
//         let temp = "." + process.argv[3]
//        // console.log(temp)
//         fileArray = tempArray.filter(file => file.includes(temp))
//       //  console.log(fileArray)
//         callback()
//     });

// }

// module.exports = getInFile(process.argv[2], process.argv[3], displayFolders())

// function displayFolders() {
//     fileArray.forEach(function(file) {
//         console.log(file)
//     })
// }

// module.exports.myCallback = displayFolders;

// getInFile(displayFolders)
