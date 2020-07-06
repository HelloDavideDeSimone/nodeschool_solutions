const duplexer = require('duplexer2')
const through = require('through2').obj

module.exports = function (counter) {
  const countries = {}
  const input = through(write, end)
  return duplexer({ objectMode: true }, input, counter)



  function write (row, _, next) {
    countries[row.country] = ( countries[row.country] || 0 ) + 1
    next()
  }

  function end (done) {
    //{ undefined: counts }
    counter.setCounts(countries)
    done()
  }

}


