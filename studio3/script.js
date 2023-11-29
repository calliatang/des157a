(function () {
    'use strict'
    console.log('reading JS');
    //anything with "dice" or "die" or "roll" is really referring to the cards, as well as flipping them. I just didn't want to rename everything

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const gameScore = document.querySelector('#gamescore');
    const body = document.querySelector('body');

    //sound variables
    const flip = new Audio('sounds/flip.mp3'); //for card flipping
    const harp = new Audio('sounds/harp.mp3'); //starting game
    const whoosh = new Audio('sounds/whoosh.mp3'); //pass turn
    const win = new Audio('sounds/win.mp3'); //win game
    const laugh = new Audio('sounds/laugh.mp3'); //magician
    const twinkle = new Audio('sounds/twinkle.mp3'); //twin cards

    const gameData = {
        dice: ['images/1card.svg', 'images/2card.svg', 'images/3card.svg', 'images/4card.svg', 'images/5card.svg', 'images/6card.svg'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 49
    };

    /* //This gets the current player: 
    gameData.players[gameData.index]

    //This gets the first die and the second die: 
    gameData.dice[gameData.roll1 - 1]
    gameData.dice[gameData.roll2 - 1]

    //This gets the score of the current player: 
    gameData.score[gameData.index]

    //This gets the index, or turn
    gameData.index

    //This gets the individual dice values and the added dice value
    gameData.roll1
    gameData.roll2
    gameData.rollSum

    //This gets the winning threshold
    gameData.rollSum */

    console.log(gameData.players[gameData.index]);


    startGame.addEventListener('click', function () {
        //random set of game index
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        harp.play(); //plays harp sound

        gameControl.innerHTML = '<h2>Game on!</h2>'
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>'; //take this element and add something to it (not replace it)

        document.getElementById('quit').addEventListener("click", function () {
            location.reload(); //refreshes the page
            gameScore.className = "hidden";
        });

        throwDice();
        gameScore.className = "showing";
    });


    function setUpTurn() {
        game.innerHTML = `<p>${gameData.players[gameData.index]}, flip your cards!</p>`
        actionArea.innerHTML = `<button id="roll">Flip the Cards</button>`;
        document.getElementById('roll').addEventListener('click', function () {
            throwDice();
            gameScore.className = "showing";
            flip.play(); //plays flip sound
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>${gameData.players[gameData.index]}, flip your cards!</p>`;
        game.innerHTML = `<p>${gameData.players[gameData.index]}, flip your cards!</p>`;
        game.innerHTML +=
        
        `
        <div id="cardGroup">
        <div class="card">
            <div class="back"></div>
            <div class="front"><img width=230 height=460 src="${gameData.dice[gameData.roll1 - 1]}" alt="card 1"> </div>
        </div>

        <div class="card">
            <div class="back"></div>
            <div class="front"><img width=230 height=460 src="${gameData.dice[gameData.roll2 - 1]}" alt="card 2"> </div>
        </div>
        </div>

        `


        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //console.log(gameData.rollSum);

        //two 1s are rolled
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Twin Magicians! They reset the score of your opponent!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            twinkle.play();

            actionArea.innerHTML = '<button id="rollagain">Next Player</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
                throwDice();
                flip.play(); //plays flip sound
            });
        }
        //rolls two 2s
        else if (gameData.roll1 === 2 && gameData.roll2 === 2) {
            game.innerHTML += "<p>Twin High Priestesses! They multiply your opponent's score by -1.5!</p>"
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            twinkle.play();

            gameData.score[gameData.index] = gameData.score[gameData.index] * (-1.5);
            actionArea.innerHTML = '<button id="rollagain">Next Player</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
                throwDice();
                flip.play(); //plays flip sound
            });
        }
        //rolls two 3s
        else if (gameData.roll1 === 3 && gameData.roll2 === 3) {
            game.innerHTML += '<p>Twin Emperesses! They take 22 points from your opponent!</p>'
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            twinkle.play();
            
            gameData.score[gameData.index] = gameData.score[gameData.index] - 22;
            actionArea.innerHTML = '<button id="rollagain">Next Player</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
                throwDice();
                flip.play(); //plays flip sound
            });
        }
        //rolls two 4s
        else if (gameData.roll1 === 4 && gameData.roll2 === 4) {
            game.innerHTML += "<p>Twin Emperors! They add 5 points to your opponent's score!</p>"
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            twinkle.play();

            gameData.score[gameData.index] = gameData.score[gameData.index] + 5;
            actionArea.innerHTML = '<button id="rollagain">Next Player</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
                throwDice();
                flip.play(); //plays flip sound
            });

            /* document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                whoosh.play(); //plays whoosh sound
            }); */
        }
        //rolls two 5s
        else if (gameData.roll1 === 5 && gameData.roll2 === 5) {
            game.innerHTML += "<p>Twin Hierophants! They multiply your opponent's score by 1.3!</p>"
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            twinkle.play();

            gameData.score[gameData.index] = gameData.score[gameData.index] * 1.3;
            actionArea.innerHTML = '<button id="rollagain">Next Player</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
                throwDice();
                flip.play(); //plays flip sound
            });

            /* document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                whoosh.play(); //plays whoosh sound
            }); */
        }
        //rolls two 6s
        else if (gameData.roll1 === 6 && gameData.roll2 === 6) {
            game.innerHTML += "<p>Twin...lovers? A double date! Your opponent's score is divided by two!</p>"
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            twinkle.play();

            gameData.score[gameData.index] = gameData.score[gameData.index] * 0.5;
            actionArea.innerHTML = '<button id="rollagain">Next Player</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
                throwDice();
                flip.play(); //plays flip sound
            });

            /* document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                whoosh.play(); //plays whoosh sound
            }); */
        }
        //either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            console.log("a one was rolled");
            laugh.play();
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); //switches turn
            game.innerHTML += `<p>The Magician magicks your turn away to ${gameData.players[gameData.index]}!</p>`;
            setTimeout(setUpTurn, 2500);

            showCurrentScore();
        }
        //neither die is a 1
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Flip again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
                throwDice();
                flip.play(); //plays flip sound
            });

            document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                whoosh.play(); //plays whoosh sound
            });

            showCurrentScore();
        }

        //winning condition
        checkWinningCondition();

    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} prevails with ${gameData.score[gameData.index]} points!</h2>`;

            body.style.backgroundColor="#FFBCAD"
            win.play(); //plays win tune
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a new game?";
        } else {
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<p>${gameData.players[0]} has <strong>${gameData.score[0]}</strong> points.</p> <p>${gameData.players[1]} has <strong>${gameData.score[1]}</strong> points.</p>`;
    }
})();