const http = require('http');

const url = process.argv[2]

http.get(url, function (resp) {
    resp.setEncoding('utf8')
    resp.on("data", function (data) {
        console.log(data)
    })
})
