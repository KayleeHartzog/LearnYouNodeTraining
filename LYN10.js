var net = require('net')
var server = net.createServer(function (connection) {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth()
  var day = date.getDate()
  var hour = date.getHours()
  var minutes = date.getMinutes()

  month = month + 1
  month = month > 10 ? month : "0" + month;
  day = day > 10 ? day : "0" + day;
  hour = hour > 10 ? hour : "0" + hour;
  minutes = minutes > 10 ? minutes : "0" + minutes;
  connection.write(year + "-" + month + "-" + day + " " + hour + ":" + minutes + "\r\n")
  connection.end()
})
var port = process.argv[2]

server.listen(port)
