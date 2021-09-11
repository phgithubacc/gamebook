const Subcore = require('../../Subcore')
class Service extends Subcore{
    constructor() {
        super()
        this._datatype = this._datatype + '@Service'
    }
}


module.exports = Service