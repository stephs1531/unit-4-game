// document.ready
$(document).ready(function() {

// wins, losses, total score start at 0
    var wins = 0;
    var losses = 0;
    var scoreCounter = 0;

// game will generate a random number between 19-120
    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(randomNumber);
    var computerNumber = randomNumber;
    
    //display it to the user
    $("#randomNumber").text(randomNumber);
    $("#total-score").text(scoreCounter);
    $("#winCount").text(wins);
    $("#loseCount").text(losses);

//crystals will be assigned numbers between 1-12 that are unknown to the user
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   
    var crystalNumber1 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    var crystalNumber2 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    var crystalNumber3 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    var crystalNumber4 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    console.log(crystalNumber1);
    console.log(crystalNumber2);  
    console.log(crystalNumber3); 
    console.log(crystalNumber4);   
    
    //this number starts hidden

//when user clicks on a crystal, it displays its value
    //adds value to user's total score
    $("#pinkCrystal").on("click", function() {
        scoreCounter += crystalNumber1;
        $("#total-score").text(scoreCounter);
        console.log(scoreCounter);
    });

    $("#rainbowCrystal").on("click", function() {
        scoreCounter += crystalNumber2;
        $("#total-score").text(scoreCounter);
        console.log(scoreCounter);
    });

    $("#blueCrystal").on("click", function() {
        scoreCounter += crystalNumber3;
        $("#total-score").text(scoreCounter);
        console.log(scoreCounter);
    });

    $("#purpleCrystal").on("click", function() {
        scoreCounter += crystalNumber4;
        $("#total-score").text(scoreCounter);
        console.log(scoreCounter);
    });
    
//if player's score === random number
    //wins++
    $(".crystalImage").on("click", function() {
    if (scoreCounter === randomNumber) {
        wins++;
        alert("You win!");
        scoreCounter = 0;
        $("#total-score").text(scoreCounter);
        $("#winCount").text(wins);
        computerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#randomNumber").text(computerNumber);
    } else if (scoreCounter > randomNumber) {
        losses++;
        alert("You lose!");
        scoreCounter = 0;
        $("#total-score").text(scoreCounter);
        $("#loseCount").text(losses);
        computerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#randomNumber").text(computerNumber);
    }
});
    //reset total score to 0 , reassign numbers to crystals, and generate new random number
    //else if score > random number
        //losses++
        //reset total score to 0, reassign numbers to crystals, and generate new random number





});