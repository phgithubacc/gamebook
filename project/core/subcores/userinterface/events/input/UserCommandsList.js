const ArcheType = require('../../../../__principle/ArcheType')

const NextPage = require('./commands/NextPage')
const PreviousPage = require('./commands/PreviousPage')
const StoryMenu = require('./commands/StoryMenu')

class UserCommandsList extends ArcheType{
    constructor() {
        super()
        this.addExtension('UserCommandsList')

        this._commands = {
            'next page' : new NextPage({}),
            'previous page' : new PreviousPage({}),
            'story menu' : new StoryMenu({}),
        }
    }

    get commands(){
        return this._commands
    }
}

module.exports = UserCommandsList
