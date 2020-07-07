const test = require('tape')
const repeatCallback = require(process.argv[2])
const T=100
test('repeatCallback', function (t) {
  t.plan(T)
  repeatCallback(T, function() {
    t.pass('callback called')
  })
})