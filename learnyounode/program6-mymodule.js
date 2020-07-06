const fs = require('fs')
const path = require('path');



module.exports = function (dir, extension, callback) {
    fs.readdir(dir, function (err, data) {
      if (err) return callback(err); // ritorno anticipato

      else {
        data = data.filter(
            function (dir) {
            if(path.extname(dir) === '.' + extension) return true;
            }
            ) 
      }
    callback(null, data)
    })
}




