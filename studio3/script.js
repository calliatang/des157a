(function () {
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
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


        gameControl.innerHTML = '<h2>Game on!</h2>'
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>'; //take this element and add something to it (not replace it)

        document.getElementById('quit').addEventListener("click", function () {
            location.reload(); //refreshes the page
        });

        throwDice();
    });


    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`
        actionArea.innerHTML = `<button id="roll">Roll the Dice</button>`;
        document.getElementById('roll').addEventListener('click', function () {
            throwDice();
            console.log("dice rolled!");
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}"> <img src="${gameData.dice[gameData.roll2 - 1]}">`
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //console.log(gameData.rollSum);

        //two 1s are rolled
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Two ones! How strange!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        //rolls two 2s
        else if (gameData.roll1 === 2 && gameData.roll2 === 2) {
            game.innerHTML += '<p>Two twos! How unlucky!</p>'
            gameData.score[gameData.index] = -10;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        //either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            console.log("a one was rolled");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); //switches turn
            game.innerHTML += `<p>Sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000);
        }
        //neither die is a 1
        else {
            console.log("the game proceeds");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            showCurrentScore();
        }

        //winning condition
        checkWinningCondition();

    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a new game?";
        } else {
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
    }
})();