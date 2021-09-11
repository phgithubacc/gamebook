const Subcore = require('../../__principle/Subcore')
class AbstractConcept extends Subcore{
    constructor() {
        super()
        this.addExtension('AbstractConcept')
    }
}

module.exports = AbstractConcept