const Subcore = require('../../Subcore')
class Storage extends Subcore{
    constructor() {
        super()
        this._datatype = this._datatype + '@Storage'
    }
}


module.exports = Storage