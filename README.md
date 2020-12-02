# Dice Roller

Made a quick little module for dice rolling. Made for people playing d&d, board games, and for anyone looking to get a random number in a certain range! 

```javascript
const dice_roller = require('dice-roller-module');

console.log(dice_roller.rollDice6())

$ 2
```
# Commands

```javascript
rollDice(number) // roll 1 to number of your choice
rollUnrealisticDice(min, max) // roll between certain range
rollDice6() 
rollDice8()
rollDice10()
rollDice12()
rollDice20()
rollDice100()
```