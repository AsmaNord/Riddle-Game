// Function to reset riddle state
function resetRiddleState() {
    document.getElementById("answer").value = "";
    document.getElementById("answer").disabled = false;
    document.getElementById("result").innerHTML = "";
    document.querySelector(".nbr-tries").innerHTML = "5";
}

// Easy difficulty
document.getElementById("easy").addEventListener("click", function() {
    resetRiddleState();
    const [riddle, answer] = generateRiddleEasy(); 
    document.querySelector(".riddle").innerHTML = riddle;
    document.querySelector("#answer").style.display = "block";
    document.querySelector("label[for='answer']").style.display = "block";
    
    // Remove any existing event listener
    const answerInput = document.getElementById("answer");
    const newAnswerInput = answerInput.cloneNode(true);
    answerInput.parentNode.replaceChild(newAnswerInput, answerInput);
    let remainingTries = 5;
    const nbrTries = document.querySelector(".nbr-tries");
    nbrTries.innerHTML = remainingTries;

    newAnswerInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter" && remainingTries > 0) {
            const userAnswer = parseInt(this.value);
            const result = document.getElementById("result");
            
            remainingTries--;
            nbrTries.innerHTML = remainingTries;

            if (userAnswer === answer) {
                result.innerHTML = "Correct!";
                this.disabled = true;
            } else {
                result.innerHTML = remainingTries > 0 ? 
                    "Incorrect. Try again." : 
                    "Game Over! The correct answer was " + answer;
                
                if (remainingTries === 0) {
                    this.disabled = true;
                }
            }
        }
    });

    document.getElementById("level").innerHTML = "Easy";
});

// Medium difficulty
document.getElementById("medium").addEventListener("click", function() {
    resetRiddleState();
    const [riddle, answer] = generateRiddleMedium(); 
    document.querySelector(".riddle").innerHTML = riddle;
    document.querySelector("#answer").style.display = "block";
    document.querySelector("label[for='answer']").style.display = "block";
    
    // Remove any existing event listener
    const answerInput = document.getElementById("answer");
    const newAnswerInput = answerInput.cloneNode(true);
    answerInput.parentNode.replaceChild(newAnswerInput, answerInput);
    let remainingTries = 5;
    const nbrTries = document.querySelector(".nbr-tries");
    nbrTries.innerHTML = remainingTries;

    newAnswerInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter" && remainingTries > 0) {
            const userAnswer = parseInt(this.value);
            const result = document.getElementById("result");
            
            remainingTries--;
            nbrTries.innerHTML = remainingTries;

            if (userAnswer === answer) {
                result.innerHTML = "Correct!";
                this.disabled = true;
            } else {
                result.innerHTML = remainingTries > 0 ? 
                    "Incorrect. Try again." : 
                    "Game Over! The correct answer was " + answer;
                
                if (remainingTries === 0) {
                    this.disabled = true;
                }
            }
        }
    });

    document.getElementById("level").innerHTML = "Medium";
});

// Hard difficulty
document.getElementById("hard").addEventListener("click", function() {
    resetRiddleState();
    const [riddle, answer] = generateRiddleHard(); // Note: Changed from generateRiddleMedium to generateRiddleHard
    document.querySelector(".riddle").innerHTML = riddle;
    document.querySelector("#answer").style.display = "block";
    document.querySelector("label[for='answer']").style.display = "block";
    
    // Remove any existing event listener
    const answerInput = document.getElementById("answer");
    const newAnswerInput = answerInput.cloneNode(true);
    answerInput.parentNode.replaceChild(newAnswerInput, answerInput);
    let remainingTries = 5;
    const nbrTries = document.querySelector(".nbr-tries");
    nbrTries.innerHTML = remainingTries;

    newAnswerInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter" && remainingTries > 0) {
            const userAnswer = parseInt(this.value);
            const result = document.getElementById("result");
            
            remainingTries--;
            nbrTries.innerHTML = remainingTries;

            if (userAnswer === answer) {
                result.innerHTML = "Correct!";
                this.disabled = true;
            } else {
                result.innerHTML = remainingTries > 0 ? 
                    "Incorrect. Try again." : 
                    "Game Over! The correct answer was " + answer;
                
                if (remainingTries === 0) {
                    this.disabled = true;
                }
            }
        }
    });

    document.getElementById("level").innerHTML = "Hard";
});

function generateRiddleEasy() {
    const number = Math.floor(Math.random() * 20);  // Generate number from 0-19 instead of 1-20
    const riddlearray = [
        "How many bytes are in a single character in ASCII?", //1
        "How many hexadecimal digits are needed to represent 1 byte?", //2
        "If HTML, CSS, and JS were superheroes, how many would they be?", //3
        "How many Caliphs were there in the Rashidun Caliphate?", //4
        "On a standard home Wi-Fi router, how many indicator lights are usually seen: Power, Internet, 2.4GHz, 5GHz, and WPS?", //5
        "How many sides does a regular hexagon have?", //6
        "How many colors are there in the rainbow?", //7
        "How many bits are in a byte?", //8
        "How many volumes are there in Sahih Al-Bukhari?", //9
        "How many years make up a decade?", //10
        "How many players are on a football (soccer) team on the field?", //11
        "How many months are in the Hijri calendar?", //12
        "How many years did the Prophet live in Makkah after revelation?", //13
        "How many lines are usually printed by for(i=0; i<14; i++)?", //14
        "How many minutes are in a quarter of an hour?", // 5+6=15
        "How many hex caracters do we need to reprsent 64bits?", //16
        "If you start counting from 0, how many values can you represent with 5 bits, stopping just before 100000?", //17
        "How many bits are in 2.25 bytes?", //18
        "What is the number of Hell's angels?", //19
        "If you code 1 hour a day for 20 days, how many hours have you coded?" //20
    ];
    
    // Return the riddle and its corresponding answer (answer is index + 1)
    return [riddlearray[number], number + 1];
}

function generateRiddleMedium() {
    const number = Math.floor(Math.random() * 20);  // Generate number from 0-19 instead of 1-20
    const riddlearray = [
        "What’s the smallest number of bits needed to represent two different states?", //1
        "How many hexadecimal digits are needed to represent 1 byte?", //2
        "How many types of loops are there in most programming languages?", //3 (for, while, do-while)
        "How many layers are there in the TCP/IP model?", //4
        "In the OSI model, which layer is responsible for session control and comes after the transport layer?", //5 Session layer
        "Count the articles of faith every Muslim must believe in Islam?", //6
        "How many layers are in the OSI model?", //7
        "In a binary tree of 4 levels, what’s the maximum number of leaf nodes?", //8
        "How many Windows versions before Windows 10?", //9 MAJOR versions
        "How many companions were promised Paradise during their lifetime?", //10
        "How many stars were shown to Prophet Yusuf in his dream?", //11
        "How many hours make up the AM period (it's easy)?", //12
        "What's the decimal value of binary 1101?", //13
        "How many prostration verses (Sajdah) are there in the Qur'an?", //14
        "What's the maximum value of a 4-bit binary number?", //15
        "How many teeth does a typical adult have per jaw?", //16
        "The ASCII value of the letter 'Q' is 81. If you subtract 64 from it, what’s the result?", //17
        "What surah number is Surah Al-Kahf in the Qur’an?", //18
        "On what date of March(1962) did the Evian Accords officially announce Algeria's independence?", //19
        "What’s the decimal of the hexadecimal value 0x14?" //20
    ];
    
    // Return the riddle and its corresponding answer (answer is index + 1)
    return [riddlearray[number], number + 1];
}
