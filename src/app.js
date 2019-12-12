const navigateDirection = (hoover, direction) => {
    switch (direction) {
        case 'n':
            hoover.y++
            break;
        case 's':
            hoover.y--
            break;
        case 'e':
            hoover.x++
            break;
        case 'w':
            hoover.x--
            break;
        default:
            break;
    }
}


const moveHoover = (hoover, directions) => {
    const directionList = directions.toLowerCase().split('')
    directionList.map(direction => navigateDirection(hoover, direction))
    return hoover
}

module.exports = moveHoover