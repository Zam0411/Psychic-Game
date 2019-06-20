    // possible choices computer will make
    var computerGuesses = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

    // created variables to represent guesses left,wins and losses
    var wins = 0;
    var losses = 0;
    var numberOfGuesses = 9;
    var guessChoices = [];
    
    //on key event function when letter is chosen
    document.onkeydown = function (event) {

        var userGuess = event.key;
        
        //how computer chooses letter
        var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
        //letters user will have available to choose ALL CAPS LOCK
        var userOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

        var check = guessChoices.includes(userGuess);
        
        if (check) { //Will not allow same letter to be chosen twice
         
        } else {
        if (userOptions.indexOf(userGuess) > -1) {
            if (userGuess === computerGuess) {
                wins++;
                numberOfGuesses = 9;
                guessChoices = [];
            }
            //when user does not guess correctly
            if (userGuess != computerGuess) {
                numberOfGuesses--;
                guessChoices.push(userGuess);
            }
            //when user did not guess correctly after 9 attempts
            if (numberOfGuesses === 0) {
                numberOfGuesses = 9;
                losses++;
                guessChoices = [];
            }
        }
    }
    
        //when user starts game
        var html =
        '<br>' +
        '<br>' +
        "<h1> The Psychic Game <span class=moon>☾☽</span></h1>" +
		    "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numberOfGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";
        document.querySelector(".Psychic-Game").innerHTML = html;

    };
    var word = document.getElementById('words')
    console.log(word.document.onkeydown)





