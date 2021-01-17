export function roll10(): number {
    return getRandomInt(10) + 1
}

export function roll6(): number {
    return getRandomInt(6) + 1
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}