var fs = require('fs')
var filesize = process.argv[2]

fs.readFile(filesize, function (err, data) {
    if (err) {
        return console.error(err)
      }
  var newlines = data.toString().split('\n').length - 1
  console.log(newlines)
})