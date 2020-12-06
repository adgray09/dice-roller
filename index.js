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

function instantDeathRoll() {
    let save_counter = 0;
    let death_counter = 0;
    for(i = 0; i < 10; i++) {
    

        const theRoll = rollDice20()
        // console.log("You rolled a", theRoll)
            if (death_counter >= 3) {
                console.log("You are dead")
                break
            } 
            if (save_counter >= 3) {
                console.log("You are stable!")
                break
            }
            if (theRoll === 1) {
                death_counter += 2
                console.log("you rolled a ", theRoll, "your death counter is at", death_counter + "/3")
            }

            if (theRoll === 20) {
                console.log("You rolled a crit", theRoll, "you now have 1hp")
                break
            }

            if (theRoll < 10 && theRoll > 1) {
                death_counter += 1
                console.log("you rolled a", theRoll, "your death counter is at", death_counter + "/3")
            }

            if (theRoll >= 10 && theRoll < 20) {
                save_counter += 1
                console.log("you rolled a", theRoll, "your save counter is at", save_counter + "/3")
            }

        }
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
    instantDeathRoll
}



