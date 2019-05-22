var myModule = require('./myModule.js')
let myDirectory = process.argv[2]
let extension = process.argv[3]


function displayFolders(arg1, arg2) {
    arg2.forEach(function(file) {
        console.log(file)
    })
}

myModule(myDirectory, extension, displayFolders)