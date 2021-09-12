const ArcheType = require('../../../../__principle/ArcheType')

class UserCommand extends ArcheType {
    constructor(context) {
        super()
        this.addExtension('UserCommand')

        this._type = 'user input command interface'

        if (context) {
            this._context = context
        } else {
            this._context = {}
        }
    }

    set context(context){
        this._context = context
    }
    execute() {
        return `User input command - type: ${this._type}, context: ${JSON.stringify(this._context)}`
    }

}

module.exports = UserCommand