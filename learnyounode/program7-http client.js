const var_url = process.argv[2];
const http =require('http');

http.get(var_url, (response) => {
    response.setEncoding("utf-8")
    response.on('data', console.log);
    response.on("error", console.error);

}).on("error", console.error)
