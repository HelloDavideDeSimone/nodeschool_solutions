
const zlib= require("zlib")
const crypto = require('crypto')
const tar = require('tar')
const concat = require('concat-stream')
const combine = require('stream-combiner');

const decript = crypto.createDecipheriv(process.argv[2], process.argv[3],process.argv[4])

const parser = new tar.Parse()
parser.on('entry', function (e) {


   if( e.type == "File" ) {
   let hash = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(hash).pipe(concat(function (h) {
       process.stdout.write(h + ' ' + e.path + "\n")
      }))
}
e.resume()

});

combine(process.stdin, decript, zlib.createGunzip(), parser)

