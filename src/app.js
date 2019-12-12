const navigateDirection = (hoover, direction) => {
    switch (direction) {
        case 'N':
            hoover.y++
            break;
        case 'S':
            hoover.y--
            break;
        case 'E':
            hoover.x++
            break;
        case 'W':
            hoover.x--
            break;
        default:
            break;
    }
}


const moveHoover = (hoover, directions, dirt) => {
    let amountOfDirtCleaned = 0

    for (let direction of directions) {
        navigateDirection(hoover, direction)

        const isOnDirst = dirt.find(patch => patch.x === hoover.x && patch.y === hoover.y)

        if (isOnDirst) {
            amountOfDirtCleaned++
        }
    }

    return {
        position: hoover,
        amountOfDirtCleaned
    }
}

module.exports = moveHoover