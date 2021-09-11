const StateCycle = require('../core/StateCycle')

describe('StateCycle test running', () => {
    let stateCycle;
    beforeEach(() => {
        stateCycle = new StateCycle()
    })

    test('single run', ()=>{
        stateCycle.run()
    })
})