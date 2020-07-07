# NodeSchool test-anything Solutions



## 1 LOG IT OUT

```javascript
const emotify = require(process.argv[2])
console.log(emotify(process.argv[3]))
```

## 2 TELL ME WHAT IS WRONG

```javascript
const isCoolNumber = require(process.argv[2])
const assert = require('assert')
assert(isCoolNumber(42))
```

## 3 TAPE IT TOGETHER

```javascript
var test = require('tape')
var fancify = require(process.argv[2])

test('fancify TEST', function (t) {
  t.ok( fancify('lo') === "~*~lo~*~" ,"OK 1")
  t.ok( fancify('lo', true) === "~*~LO~*~", "OK 2")
  t.ok( fancify('lo', true, '-') === "~-~LO~-~", "OK 3")
  t.end()
})
```

## 4 CALL ME MAYBE

```javascript
const test = require('tape')
const repeatCallback = require(process.argv[2])
const T=100
test('repeatCallback', function (t) {
  t.plan(T)
  repeatCallback(T, function() {
    t.pass('callback called')
  })
})
```

## 5 TO ERR IS HUMAN, TO PURR IS FELINE

```javascript
var test = require('tape')
var feedCat = require(process.argv[2])

test('feedcat TEST', function (t) {
  t.ok( feedCat('food') === "yum" ,"OK 1")
  t.throws(feedCat.bind(null, 'chocolate'))
  t.end()
})
```
