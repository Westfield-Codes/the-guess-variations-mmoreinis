/* Define a function called rollDice */
var counter = 0;
function rollDice() {
    // create a variable called roll, set it equal to random 1-6
    // let roll = Math.floor(Math.random()*6)+1;
    let roll = Math.floor(Math.random()*6)+1;
    counter += 1;
    // if roll equals 6, display "6! You win!"
    if (roll == 6) {
        alert("6! You won in " + counter);
        counter = 0;
    }
    // otherwise:
    // use a confirm and say: "You rolled a [roll]"
    else if (roll > 8){
        alert("You ran over 8");
    }
    else {
        // confirm("You rolled a " + roll);
        // then call rollDice again.
        rollDice();
    // close the else block
    }
// close the function block
}