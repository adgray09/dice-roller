// if you want to make an imaginary dice :D 
function rollUnrealisticDice(min, max) {
    return min + Math.floor(Math.random() * (max-min + 1))
}

function rollDice6() {
    return 1 + Math.floor(Math.random()*6)
}

function rollDice8() {
    return 1 + Math.floor(Math.random()*8)
}

function rollDice10() {
    return 1 + Math.floor(Math.random()*10)
}

function rollDice12() {
    return 1 + Math.floor(Math.random()*12)
}

function rollDice20() {
    return 1 + Math.floor(Math.random()*20)
}

function rollDice100() {
    return 1 + Math.floor(Math.random()*100)
}

// put in the highest number of the dice, it'll roll 1 to 'number'
function rollDice(max) {
    return 1 + Math.floor(Math.random()*max)
}

module.exports = {
    rollUnrealisticDice,
    rollDice6,
    rollDice8,
    rollDice10,
    rollDice12,
    rollDice20,
    rollDice100,
    rollDice,
}



