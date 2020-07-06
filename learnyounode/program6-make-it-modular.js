const filterfn = require('./program6-mymodule.js')


var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}

filterfn(process.argv[2],process.argv[3], callback); 


