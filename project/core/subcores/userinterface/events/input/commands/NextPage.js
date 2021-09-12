const UserInput = require('../UserCommand')

class NextPage extends UserInput {
    constructor(context) {
        super(context);
        this.addExtension('NextPage')

        this._type = 'next page'
    }
}

module.exports = NextPage