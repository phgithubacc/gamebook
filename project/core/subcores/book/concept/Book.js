const Subcore = require('../../Subcore')
class Book extends Subcore{
    constructor() {
        super()
        this._datatype = this._datatype + '@Book'
    }
}

module.exports = Book