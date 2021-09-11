class RootType{
    constructor(extensionType) {
        this._datatype = 'root'
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

module.exports = RootType