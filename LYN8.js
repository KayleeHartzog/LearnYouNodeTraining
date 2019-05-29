const http = require('http');

const url = process.argv[2]

http.get(url, function (resp) {
    resp.setEncoding('utf8')
    let body = ''
    resp.on("data", function (data) {
        body += data
    })
    resp.on("end", function () {
        console.log(body.length)
        console.log(body)
    })
})