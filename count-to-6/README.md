# NodeSchool count-to-6 Solutions

## 1 HELLO ES6

```javascript
console.log("HELLO ES6")
```

## 2 TEMPLATE STRINGS

```javascript
const name = process.argv[2]
console.log(`Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`)
```

## 3 ARROW FUNCTION, PART 1

```javascript
let arr = process.argv.slice(2)

let reduced = arr.map(x => x[0] )
console.log(
    `[${arr}] becomes "${reduced.join('')}"`
    );
```

## 4 ARROW FUNCTION AND THIS

```javascript
var foot = {
    kick: () => {
        this.yelp = "Ouch!";
        setImmediate( ()=>console.log(this.yelp) )
    }
}
foot.kick();
```

## 5 DESTRUCTURING

```javascript
let userarray = process.argv.slice(2);

let user = {};
[, user.username, user.email] = userarray;
console.log(user);
```

## 6 SPREAD


```javascript
let array = process.argv.slice(2);

const min = Math.min(...array)

console.log(
`The minimum of [${array}] is ${min}`
);
```

## 7 SPREAD


```javascript
module.exports = function (...args){
    let sum=0;
    args.forEach(x=>{sum+=x});
    return (sum/args.length);
};
```
## 8 DEFAULT ARGUMENTS, Part 1

```javascript
module.exports = function midpoint(min = 0, max = 1){
    return ( (min+max)/2);
};
```
## 9 DEFAULT ARGUMENTS, Part 2


```javascript
module.exports = (string , l = string.length)=>{
return `${string}${"!".repeat(l)}`
};
```

## 10 TAGGED TEMPLATE STRINGS

```javascript
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function html(arr, ...vars) {
    let r = arr[0];
    for (let i = 0; i < vars.length; ++i) {
        r += escape(vars[i]) + arr[i + 1];
    }
    return r;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;");
            
}
```