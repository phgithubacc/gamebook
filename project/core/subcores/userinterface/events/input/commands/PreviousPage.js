const UserInput = require('../UserCommand')

class PreviousPage extends UserInput {
    constructor(context) {
        super(context);
        this.addExtension('PreviousPage')
        this._type = 'previous page'
    }
}

module.exports = PreviousPage