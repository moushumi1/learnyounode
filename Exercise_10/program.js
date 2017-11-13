  var net = require("net");
  var portNumber = process.argv[2]
  var server = net.createServer(function (socket) {
    socket.end(getFormattedDate() + "\n");
  })

  server.listen(portNumber)
  function getFormattedDate() {
    var today = new Date();
    return [ today.getFullYear(),
             zeroFilled(today.getMonth() + 1),
             zeroFilled(today.getDate()) ].join("-")
             + " " +
           [ zeroFilled(today.getHours()),
             zeroFilled(today.getMinutes()) ].join(":");
  }
  function zeroFilled(number) {
    return number < 10 ? "0" + number : number;
  }