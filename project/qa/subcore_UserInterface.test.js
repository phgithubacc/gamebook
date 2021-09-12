const UserCommand = require('../core/subcores/userinterface/events/input/UserCommand')
const NextPage = require('../core/subcores/userinterface/events/input/commands/NextPage')
const PreviousPage = require('../core/subcores/userinterface/events/input/commands/PreviousPage')
const StoryMenu = require('../core/subcores/userinterface/events/input/commands/StoryMenu')

const UserInterface = require('../core/subcores/userinterface/__principle/UserInterface')

describe('user input commands', () => {

    let userCommand
    let nextPage
    let previousPage
    let storyMenu

    beforeEach(() => {
        userCommand = new UserCommand()
        nextPage = new NextPage({current: 2})
        previousPage = new PreviousPage({current: 3})
        storyMenu = new StoryMenu({current: 4})
    })

    test('check user input commands datatype', () => {
        expect(userCommand.datatype).toBeDefined()
        expect(userCommand.datatype).toBe('arche_@_UserCommand')
        expect(nextPage.datatype).toBeDefined()
        expect(nextPage.datatype).toBe('arche_@_UserCommand_@_NextPage')
        expect(previousPage.datatype).toBeDefined()
        expect(previousPage.datatype).toBe('arche_@_UserCommand_@_PreviousPage')
        expect(storyMenu.datatype).toBeDefined()
        expect(storyMenu.datatype).toBe('arche_@_UserCommand_@_StoryMenu')
    })

    test('check user Command commands execute method', () => {
        expect(userCommand.execute).toBeDefined()
        expect(userCommand.execute()).toBe('User input command - type: user input command interface, context: {}')
        expect(nextPage.execute).toBeDefined()
        expect(nextPage.execute()).toBe('User input command - type: next page, context: {\"current\":2}')
        expect(previousPage.execute).toBeDefined()
        expect(previousPage.execute()).toBe('User input command - type: previous page, context: {\"current\":3}')
        expect(storyMenu.execute).toBeDefined()
        expect(storyMenu.execute()).toBe('User input command - type: story menu, context: {\"current\":4}')
    })

})

describe('UserInterface action method with different input commands', () => {

    let userInterface
    let args

    beforeAll(()=>{
        args = {command: 'unset command', context:{current:4}}
    })

    beforeEach(() => {
        userInterface = new UserInterface()
    })

    test('next page command', ()=>{
        args.command = "next page"
        expect(userInterface._commands[args.command]).toBeDefined()
        userInterface.action(args)
    })

    test('previous page command', ()=>{
        args.command = "previous page"
        expect(userInterface._commands[args.command]).toBeDefined()
        userInterface.action(args)
    })

    test('story menu command', ()=>{
        args.command = "story menu"
        expect(userInterface._commands[args.command]).toBeDefined()
        userInterface.action(args)
    })

})
