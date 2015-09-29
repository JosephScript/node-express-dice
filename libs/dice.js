var dice = {

    roll: function (input) {
        console.log('Input:', input);
        var total = input.replace(/[^+0-9d]+/g, '')// remove everything that isn't a number, 'd', '+'
            .split(/\+/) // split up on '+'
            .map(parseRoll)
            .reduce(function (a, b) {
                return a + b;
            });
        console.log("Total :", total);
        return total;
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function parseValue(val) {
    return parseInt(val || "1");
}

function parseRoll(roll) {

    // only here for the snippet
    console.log("Parsing " + roll);

    var parts = roll.split(/d/); // split up the dice
    var sum = 0;
    var limit = parseValue(parts[1]); // if undefined, we get a 1
    for (var i = parseValue(parts[0]) - 1; i >= 0; i--) {
        var got = getRandomInt(1, limit);
        sum += got;

        if (roll.indexOf('d') > -1) { // if we're rolling a die
            console.log("  From roll " + roll + ", roll " + (i + 1) + " was " + got + ". Total: " + sum);
        } else if (i === 0){ // if we're returning the final total of the '+'
            console.log("  Added " + sum + ".");
        }
    }
    return sum;
}

module.exports = dice;