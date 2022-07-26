const maxGuesses = 10;
let numberToGuess = Math.trunc(Math.random()*100) + 1 ; 
let guess = '';
let guessesRemaining = maxGuesses;
let numbersGuessed = [];
let alreadyUsed = false;
resetGame();
let numberArray = [];

document.getElementById("count-id").innerHTML =
			"High Score: 0";

            //Fucntion Checking Guess Number is already Used
            function checkGuess() {
                guess = parseInt(document.getElementById("number-input").value);
    
                if (guessesRemaining > 0) {
                    if (!(isNaN(guess)) && guess != '' && guess <= 100 && guess >= 1) {
    
                        //alreadyUsed = numbersGuessed.includes(guess);
                        alreadyUsed = numbersGuessed.includes(guess);
                        if (!alreadyUsed) {
    
                            guessesRemaining--;
                            document.getElementById("alert").innerHTML = "<br>"
                            numbersGuessed.push(guess);
                            document.getElementById("numbers-guessed").innerHTML =
                                "Guess History: " + "<br>" + numbersGuessed.join("<br>");
                            document.getElementById("guesses-remaining").innerHTML =
                                "Score: " + guessesRemaining;
    
                            document.getElementById("number-input").value = '';
                            document.getElementById("number-input").focus();
                            if (guess < numberToGuess) {
                                document.getElementById("alert").innerHTML = "Your guess number is too low";
                            }
                            if (guess > numberToGuess) {
                                document.getElementById("alert").innerHTML = "Your guess number is too high";
                            }
    
                            if (guess === numberToGuess) {
                                guessesRemaining++;
                                document.getElementById("count-id").innerHTML = "High Score: " + guessesRemaining;
                                document.getElementById("correct").innerHTML = "Your guess was correct. " + guess + " is my secret number.";
                                document.getElementById("new-1").innerHTML = "Your Score: " + guessesRemaining;
                                document.getElementById("new-2").innerHTML = "Best Score: " + guessesRemaining;
                                document.getElementById("number-input").style.display = "none";
                                document.getElementById("btn-guess").style.display = "none";
                                document.getElementById("btn-play-again").style.display = "inline";
                                document.getElementById('alert').style.color = 'red';
                                document.getElementById("alert-win").style.display = "block";
                                document.getElementById("num-text-a").style.display = "none";
                                document.getElementById("alert-loss").style.display = "none";
                                document.getElementById("btn-play-again").focus();
                                return;
                            }
    
                            if (guessesRemaining === 0) {
                                gameOver();
                            }
                        } else {
                            document.getElementById("alert").innerHTML = "You already guessed that number!";
                            document.getElementById("number-input").select();
                        } // if ( ! alreadyUsed )
    
    
    
                    }else{
                            document.getElementById("alert").innerHTML = "Please enter a number between 1 to 100"; 
                    }
                } // if ( guessesRemaining > 0 )
            } // checkGuess()
    
            function gameOver() {
                document.getElementById('numbers-guessed').innerHTML =
                "Guess History: " + "<br>" + numbersGuessed.join("<br>");
                document.getElementById('btn-guess').style.display = 'none'
                document.getElementById('btn-try-again').style.display = 'inline';
                document.getElementById('number-input').value = '';
                document.getElementById('number-input').disabled = true;
                document.getElementById('btn-play-again').focus();
                document.getElementById("alert-win").style.display = "none";
                document.getElementById("alert-loss").style.display = "block";
                document.getElementById("number-input").style.display = "none";
                document.getElementById("num-text-a").style.display = "none";
                document.getElementById("count-id").innerHTML = "High Score: 0";
            }
    
    
            function resetGame() {
                guessesRemaining = maxGuesses;
                numbersGuessed = [];
                guess = '';
                document.getElementById('numbers-guessed').innerHTML = "Guess History: ";
                document.getElementById('btn-guess').style.display = 'inline'
                document.getElementById('btn-play-again').style.display = 'none'
                document.getElementById('number-input').value = '';
                document.getElementById('number-input').focus();
                document.getElementById('number-input').disabled = false;
                document.getElementById("guesses-remaining").innerHTML =
                    "Score: " + guessesRemaining;
                document.getElementById("alert").innerHTML = " ";
                document.getElementById('background').style.background = '#B6E9EA';
                document.getElementById("alert-win").style.display = "none";
                document.getElementById("number-input").style.display = "block";
                document.getElementById("num-text-a").style.display = "block";
                document.getElementById("alert-loss").style.display = "none";
                document.getElementById("count-id").innerHTML = "High Score: 0";
                numberToGuess = Math.trunc(Math.random()*100) + 1 ; 
                console.log(numberToGuess);
            }
    
            document.getElementById('btn-play-again').addEventListener('click', resetGame);
            document.getElementById('reset-id').addEventListener('click', resetGame);
            document.getElementById('btn-try-again').addEventListener('click', resetGame);
    
            document.getElementById('btn-guess').addEventListener('click', checkGuess);
    