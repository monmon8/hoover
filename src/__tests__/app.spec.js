const moveHoover = require('../app')

describe('hoover', () => {
    it('moves according to directions', () => {
        const hoover = {
            x: 1,
            y: 2
        }
        expect(moveHoover(hoover, 'NES', [])).toEqual({
            position: {
                x: 2,
                y: 2
            },
            amountOfDirtCleaned: 0
        })
    })

    it('cleans dirt', () => {
        const hoover = {
            x: 1,
            y: 2
        }

        const dirt = [{
            x: 2,
            y: 2
        }, {
            x: 1,
            y: 3
        }, {
            x: 5,
            y: 1
        }]

        expect(moveHoover(hoover, 'NES', dirt)).toEqual({
            position: {
                x: 2,
                y: 2
            },
            amountOfDirtCleaned: 2
        })
    })

})