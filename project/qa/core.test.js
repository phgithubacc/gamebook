const RootType = require('../core/__concept/RootType')
const Subcore = require('../core/subcores/__concept/Subcore')

const Book = require('../core/subcores/book/__concept/Book')
const Gamesystem = require('../core/subcores/gamesystem/__concept/Gamesystem')
const Service = require('../core/subcores/service/__concept/Service')
const Storage = require('../core/subcores/storage/__concept/Storage')
const UserInterface = require('../core/subcores/userinterface/__concept/UserInterface')

describe('testing dataytpe core', () => {

    let rootType;
    let subcore;
    let book;
    let gamesystem;
    let service;
    let storage;
    let userinterface;

    beforeEach(() => {
        rootType = new RootType()
        subcore = new Subcore()
        book = new Book()
        gamesystem = new Gamesystem()
        service = new Service()
        storage = new Storage()
        userinterface = new UserInterface()
    })

    test('datatype define and corret', () => {
        expect(rootType.datatype).toBeDefined()
        expect(rootType.datatype).toBe('root')

        expect(subcore.datatype).toBeDefined()
        expect(subcore.datatype).toBe('root_@_Subcore')

        expect(book.datatype).toBeDefined()
        expect(book.datatype).toBe('root_@_Subcore_@_Book')
        expect(gamesystem.datatype).toBeDefined()
        expect(gamesystem.datatype).toBe('root_@_Subcore_@_Gamesystem')
        expect(service.datatype).toBeDefined()
        expect(service.datatype).toBe('root_@_Subcore_@_Service')
        expect(storage.datatype).toBeDefined()
        expect(storage.datatype).toBe('root_@_Subcore_@_Storage')
        expect(userinterface.datatype).toBeDefined()
        expect(userinterface.datatype).toBe('root_@_Subcore_@_UserInterface')

    })

})
