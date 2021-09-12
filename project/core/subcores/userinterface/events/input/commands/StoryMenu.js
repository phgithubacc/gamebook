const UserInput = require('../UserCommand')

class StoryMenu extends UserInput {
    constructor(context) {
        super(context);
        this.addExtension('StoryMenu')
        this._type = 'story menu'
    }
}

module.exports = StoryMenu