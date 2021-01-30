export function roll10(times: number = 1): number {
    return times * getRandomInt(10) + times
}

export function roll6(times: number = 1): number {
    return times * getRandomInt(6) + times
}

export function rollCustomDice(size = 10, times = 1): number {
    return times * getRandomInt(size) + times
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}