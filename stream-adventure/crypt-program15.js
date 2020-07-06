const pass=process.argv[2]
const key = process.argv[3]

const crypto = require('crypto')
const decript = crypto.createDecipheriv('aes256', pass,key)

process.stdin.pipe(decript).pipe(process.stdout)

