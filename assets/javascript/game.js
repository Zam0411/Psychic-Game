


	
    // possible choices computer will make
     var computerGuesses = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

     // created variables to represent guesses left,wins and losses
     var wins = 0;
     var losses = 0;
     var numberOfGuesses = 9;
     var guessChoices = [];
     var userAnswers = [];
     var isDuplicate = false;
     var currentAnswer = []
     
    
     //on key event function when letter is chosen
     document.onkeydown = function(event) {

         var userGuess = event.key;
        //how computer chooses letter
         var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
        //letters user will have available to choose ALL CAPS LOCK
         var userOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
         
         
        //when user guesses correctly
        if (userOptions.indexOf(userGuess) > -1) {
            if (userGuess === computerGuess) {
                wins++;
                numberOfGuesses = 9;
                guessChoices = [];
            }
            //when user does not guess correctly
            if (userGuess != computerGuess) {
                numberOfGuesses --;
                guessChoices.push(userGuess);
            }
            //when user did not guess correctly after 9 attempts
            if (numberOfGuesses === 0) {
                numberOfGuesses = 9;
                losses ++;
                guessChoices = [];
            }
            //attempted to create a way for the same letter to not be able to be used again. *unable to find way to make this work*
            for (var i = 0; i < userAnswers.length; i++) { 
            if (currentAnswer == userAnswers[i]) { 
                isDuplicate = true;
                break; 
            }
        }			
            //part of attempt to make letter not be repeatably chosen
            if (!isDuplicate) { 
                userAnswers[userAnswers.length] = currentAnswer;

            }
            //when user starts game
            var html = 
                "<h1> The Psychic Game </h1>" +
                "<p>Guess what letter I'm thinking of</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + numberOfGuesses + "</p>" +
                "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

            document.querySelector(".Psychic-Game").innerHTML = html;

        
        }
    };




