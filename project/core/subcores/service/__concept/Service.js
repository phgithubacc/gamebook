const Subcore = require('../../__concept/Subcore')
class Service extends Subcore{
    constructor() {
        super()
        this.addExtension('Service')
    }
}


module.exports = Service