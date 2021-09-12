const Subcore = require('../../__principle/Subcore')
const UserCommandsList = require('../events/input/UserCommandsList')

class UserInterface extends Subcore {
    constructor() {
        super()
        this.addExtension('UserInterface')

        this._modes = ['input', 'output']
        this._state = this._modes[0]

        this._commands = (new UserCommandsList()).commands

    }

    get state() {
        return this._state
    }

    action(args) {
        super.action();

        if(this._state === this._modes[0]){
            if(!!args){
                const {command, context} = args
                this._commands[command].context = context
                console.log(this._commands[command].execute())
            }

            this._state = this._modes[1]
        }else {
            this._state = this._modes[0]
        }

    }

}


module.exports = UserInterface