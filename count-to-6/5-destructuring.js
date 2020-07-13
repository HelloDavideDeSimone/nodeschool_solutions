let userarray = process.argv.slice(2);

let user = {};
[, user.username, user.email] = userarray;
console.log(user);