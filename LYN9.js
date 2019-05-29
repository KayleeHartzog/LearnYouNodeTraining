const http = require('http');

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

http.get(url1, function (resp) {
    resp.setEncoding('utf8')
    let body = ''
    resp.on("data", function (data) {
        body += data
    })
    resp.on("end", function () {
        console.log(body)
        http.get(url2, function (resp) {
            resp.setEncoding('utf8')
            let body = ''
            resp.on("data", function (data) {
                body += data
            })
            resp.on("end", function () {
                console.log(body)
                http.get(url3, function (resp) {
                    resp.setEncoding('utf8')
                    let body = ''
                    resp.on("data", function (data) {
                        body += data
                    })
                    resp.on("end", function () {
                        console.log(body)
                    })
                })
            })
        })
    })
})

