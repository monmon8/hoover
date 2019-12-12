const moveHoover = require('../app')

describe('hoover', () => {
    it('moves according to directions', () => {
        const hoover = {
            x: 1,
            y: 2
        }
        expect(moveHoover(hoover, 'NES')).toEqual({
            x: 2,
            y: 2
        })
    })
})