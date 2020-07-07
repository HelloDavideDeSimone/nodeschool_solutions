var test = require('tape')
var feedCat = require(process.argv[2])

test('feedcat TEST', function (t) {
  t.ok( feedCat('food') === "yum" ,"OK 1")
  t.throws(feedCat.bind(null, 'chocolate'))
  t.end()
})