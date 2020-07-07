var test = require('tape')
var fancify = require(process.argv[2])

test('fancify TEST', function (t) {
  t.ok( fancify('lo') === "~*~lo~*~" ,"OK 1")
  t.ok( fancify('lo', true) === "~*~LO~*~", "OK 2")
  t.ok( fancify('lo', true, '-') === "~-~LO~-~", "OK 3")
  t.end()
})