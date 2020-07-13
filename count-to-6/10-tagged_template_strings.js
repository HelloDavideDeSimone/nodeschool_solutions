
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