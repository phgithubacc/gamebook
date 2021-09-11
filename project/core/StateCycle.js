const ArcheType = require('./__principle/ArcheType')

const UserInterface = require('./subcores/userinterface/__principle/UserInterface')
const ConcreteConcept = require('./subcores/concreteConcept/__principle/ConcreteConcept')
const AbstractConcept = require('./subcores/abstractConcept/__principle/AbstractConcept')
const Storage = require('./subcores/storage/__principle/Storage')
const Service = require('./subcores/service/__principle/Service')

class StateCycle extends ArcheType {
    constructor() {
        super()
        this.addExtension('StateCycle')

        this._sequenceOfStates = [
            new UserInterface(),
            new ConcreteConcept(),
            new AbstractConcept(),
            new Storage(),
            new Service(),
        ]

        this._currentState = this._sequenceOfStates[0]
        this._index = 0;


    }

    next() {
        this._currentState = this._sequenceOfStates[this._index]
        if (this._currentState.launching) {
            this._sequenceOfStates[this._index].action()
        }
        this._index = this._index + 1
    }

    run() {
        const length = this._sequenceOfStates.length
        while (this._index < length) {
            this.next()
        }
        this._sequenceOfStates[0].action()

    }

}

module.exports = StateCycle