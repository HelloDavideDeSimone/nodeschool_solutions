const { Readable } = require('stream')

class ReadableStream extends Readable {
  constructor (content, options = {}) {
    super(options)
    this.content = content
  }

  _read (size) {
    if (!this.content) return this.push(null)

    this.push(this.content.slice(0, size))
    this.content = this.content.slice(size)
  }
}

const stream = new ReadableStream(process.argv[2])
stream.pipe(process.stdout)


/*



const { Readable } = require('stream')
const data = process.argv[2]



class MyStream extends Readable {

    let chunk = data.slice(0,size)
  _read(size) {
      if (!this.chunk) return this.push(null)
      this.push(chunk)

  }
}
var str = new MyStream
str.pipe(process.stdout)

*/