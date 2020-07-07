# NodeSchool learnyounode Solutions

## 1 IDENTITY

```javascript
const id = function (arg){
return arg
}
module.exports=id
```

## 2 BINARY

```javascript
const sum = function (a,b){
return a+b;
}
module.exports=sum
```

## 3 DELAY INVOCATION

```javascript
const sum = function (a){
return function(b){
    return a+b;
}
}
module.exports=sum
```

## 4 LONG DELAY INVOCATION

```javascript
let total = 0
const sum = function (a){
    if( !(a||0) ) return total;
    total = total+a;
    return sum;
}
module.exports=sum
```

## 5 CALL AND APPLY

```javascript
var callAndApply = {
        caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
            method.call(object, nameArg, ageArg, tShirtSizeArg)

        },
        applier: function (object, method, argumentsArr) {
            
            method.apply(object, argumentsArr)
        }
      };
      module.exports = callAndApply;
```

## 6 CURRY FUNCTION


```javascript
function curry(fx) {
    var arity = fx.length;
  
    return function f1() {
      var args = Array.prototype.slice.call(arguments, 0);
      if (args.length >= arity) {
        return fx.apply(null, args);
      }
      else {
        return function f2() {
          var args2 = Array.prototype.slice.call(arguments, 0);
          return f1.apply(null, args.concat(args2)); 
        }
      }
    };
  }

module.exports = curry
```
