const RootType = require('../../__principle/ArcheType')

class Subcore extends RootType {

    constructor() {
        super()
        this.addExtension('Subcore')
        this._launching = true
    }

    set launching(launching){
        this._launching = launching
    }
    get launching(){
        return this._launching
    }
    action(){
        // console.log(this.datatype)
    }

}

module.exports = Subcore