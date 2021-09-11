const ArcheType = require('../core/__principle/ArcheType')
const Subcore = require('../core/subcores/__principle/Subcore')

const Book = require('../core/subcores/AbstractConcept/__principle/AbstractConcept')
const Gamesystem = require('../core/subcores/ConcreteConcept/__principle/ConcreteConcept')
const Service = require('../core/subcores/service/__principle/Service')
const Storage = require('../core/subcores/storage/__principle/Storage')
const UserInterface = require('../core/subcores/userinterface/__principle/UserInterface')

describe('testing dataytpe core', () => {

    let archeType;
    let subcore;
    let book;
    let gamesystem;
    let service;
    let storage;
    let userinterface;

    beforeEach(() => {
        archeType = new ArcheType()
        subcore = new Subcore()
        book = new Book()
        gamesystem = new Gamesystem()
        service = new Service()
        storage = new Storage()
        userinterface = new UserInterface()
    })

    test('datatype define and corret', () => {
        expect(archeType.datatype).toBeDefined()
        expect(archeType.datatype).toBe('arche')

        expect(subcore.datatype).toBeDefined()
        expect(subcore.datatype).toBe('arche_@_Subcore')

        expect(book.datatype).toBeDefined()
        expect(book.datatype).toBe('arche_@_Subcore_@_AbstractConcept')
        expect(gamesystem.datatype).toBeDefined()
        expect(gamesystem.datatype).toBe('arche_@_Subcore_@_ConcreteConcept')
        expect(service.datatype).toBeDefined()
        expect(service.datatype).toBe('arche_@_Subcore_@_Service')
        expect(storage.datatype).toBeDefined()
        expect(storage.datatype).toBe('arche_@_Subcore_@_Storage')
        expect(userinterface.datatype).toBeDefined()
        expect(userinterface.datatype).toBe('arche_@_Subcore_@_UserInterface')

    })

})
