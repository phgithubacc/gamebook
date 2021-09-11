class ArcheType {
    constructor(extensionType) {
        this._datatype = 'arche'
        this._delimeter = '_@_'

        this.addExtension(extensionType)
    }

    addExtension(extensionType){
        if(extensionType && extensionType != 'root'){
            this._datatype = this._datatype + this._delimeter + extensionType
        }

    }

    get datatype(){
        return this._datatype
    }

    get delimeter(){
        return this._delimeter
    }
}

module.exports = ArcheType