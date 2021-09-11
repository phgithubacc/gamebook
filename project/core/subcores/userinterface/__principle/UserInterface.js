const Subcore = require('../../__principle/Subcore')

class UserInterface extends Subcore {
    constructor() {
        super()
        this.addExtension('UserInterface')

        this._modes = ['input', 'output']
        this._state = this._modes[0]
    }

    get state() {
        return this._state
    }

    action() {
        super.action();
        console.log(this.state)
        if(this._state === this._modes[0]){
            this._state = this._modes[1]
        }else {
            this._state = this._modes[0]
        }
    }

}


module.exports = UserInterface