const Subcore = require('../../__concept/Subcore')
class Book extends Subcore{
    constructor() {
        super()
        this.addExtension('Book')
    }
}

module.exports = Book