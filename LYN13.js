const http = require('http')
var url = require('url')
var port = process.argv[2]

var server = http.createServer(function (req, res) { 
    var stuff = url.parse(req.url, true)
    var qdata = stuff.query.iso
    var date = new Date(qdata)
    var obj  = {'hour' : date.getHours(), 'minute' : date.getMinutes(), 'second' : date.getSeconds()}
    var obj2 = {'unixtime' : date.getTime()}
    var pathname = stuff.pathname

    if (pathname === '/api/parsetime')
        res.write(JSON.stringify(obj))
    else if (pathname === '/api/unixtime')
        res.write(JSON.stringify(obj2))
    res.end()
})

server.listen(port)