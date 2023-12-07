(function (){
    'use strict';
    console.log('yay javascript!');

    //variables-------------------------
    const fairy = document.querySelector('#fairy'); //fairy page spread
    const game = document.querySelector('#game'); //daisy minigame
    const nancy = document.querySelector('#nancy'); //nancy pagespread
    const nancypics = document.querySelector('#nancypics'); //pics from the book
    const tree = document.querySelector('#tree'); //tree pop-up image
    const gametxt = document.querySelector('#gametxt');

    //petals
    const p1 = document.querySelector('#p1');
    const p2 = document.querySelector('#p2');
    const p3 = document.querySelector('#p3');
    const p4 = document.querySelector('#p4');
    const p5 = document.querySelector('#p5');
    const p6 = document.querySelector('#p6');
    const p7 = document.querySelector('#p7');



    const overlay = document.querySelector('.overlay');

    //overlays--------------------------
    fairy.addEventListener('click', function(event) {
        game.className = "showverlay";
    })

    nancy.addEventListener('click', function(event) {
        nancypics.className = "showverlay";
    })


    //close overlays
    document.querySelector('#exit1').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#game').className='hidelay';
    })

    document.querySelector('#exit2').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#nancypics').className='hidelay';
    })

    //daisy game------------------------
    p1.addEventListener('click', function(event) {
        gametxt.innerHTML =
        `<img src="daisyImgs/daisy-2.jpg" height="315" width="240" alt="daisy puzzle" id="daisy">
        <div id="p1"></div>
        <div id="p2"></div>
        <div id="p3"></div>
        <div id="p4"></div>
        <div id="p5"></div>
        <div id="p6"></div>
        <div id="p7"></div>
        
        <p>Nope!</p>
        <div id="try">
            <p id="again">Try again?</p>
            <p id="exit1">Exit</p>
        </div>`

        document.querySelector('#again').addEventListener('click', function (event) {
            location.reload();
        })

        document.querySelector('#exit1').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#game').className='hidelay';
        })
    })

    p2.addEventListener('click', function(event) {
        gametxt.innerHTML =
        `<img src="daisyImgs/daisy-5.jpg" height="315" width="240" alt="daisy puzzle" id="daisy">
        <div id="p1"></div>
        <div id="p2"></div>
        <div id="p3"></div>
        <div id="p4"></div>
        <div id="p5"></div>
        <div id="p6"></div>
        <div id="p7"></div>
        
        <p>Nope!</p>
        <div id="try">
            <p id="again">Try again?</p>
            <p id="exit1">Exit</p>
        </div>`

        document.querySelector('#again').addEventListener('click', function (event) {
            location.reload();
        })

        document.querySelector('#exit1').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#game').className='hidelay';
        })
    })

    p3.addEventListener('click', function(event) {
        gametxt.innerHTML =
        `<img src="daisyImgs/daisy-4.jpg" height="315" width="240" alt="daisy puzzle" id="daisy">
        <div id="p1"></div>
        <div id="p2"></div>
        <div id="p3"></div>
        <div id="p4"></div>
        <div id="p5"></div>
        <div id="p6"></div>
        <div id="p7"></div>
        
        <p>Nope!</p>
        <div id="try">
            <p id="again">Try again?</p>
            <p id="exit1">Exit</p>
        </div>
        `

        document.querySelector('#again').addEventListener('click', function (event) {
            location.reload();
        })

        document.querySelector('#exit1').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#game').className='hidelay';
        })
    });
    
    p4.addEventListener('click', function(event) {
        gametxt.innerHTML =
        `<img src="daisyImgs/daisy-3.jpg" height="315" width="240" alt="daisy puzzle" id="daisy">
        <div id="p1"></div>
        <div id="p2"></div>
        <div id="p3"></div>
        <div id="p4"></div>
        <div id="p5"></div>
        <div id="p6"></div>
        <div id="p7"></div>
        
        <p>Nope!</p>
        <div id="try">
            <p id="again">Try again?</p>
            <p id="exit1">Exit</p>
        </div>`

        document.querySelector('#again').addEventListener('click', function (event) {
            location.reload();
        });

        document.querySelector('#exit1').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#game').className='hidelay';
        });
    });

    p5.addEventListener('click', function(event) {
        gametxt.innerHTML =
        `<img src="daisyImgs/daisy-7.jpg" height="315" width="240" alt="daisy puzzle" id="daisy">
        <div id="p1"></div>
        <div id="p2"></div>
        <div id="p3"></div>
        <div id="p4"></div>
        <div id="p5"></div>
        <div id="p6"></div>
        <div id="p7"></div>
        
        <p>There she is!</p>
        <div id="try">
            <p id="again">Restart?</p>
            <p id="exit1">Exit</p>
        </div>`

        document.querySelector('#again').addEventListener('click', function (event) {
            location.reload();
        });

        document.querySelector('#exit1').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#game').className='hidelay';
        })
    })

    p6.addEventListener('click', function(event) {
        gametxt.innerHTML =
        `<img src="daisyImgs/daisy-6.jpg" height="315" width="240" alt="daisy puzzle" id="daisy">
        <div id="p1"></div>
        <div id="p2"></div>
        <div id="p3"></div>
        <div id="p4"></div>
        <div id="p5"></div>
        <div id="p6"></div>
        <div id="p7"></div>
        
        <p>Nope!</p>
        <div id="try">
            <p id="again">Try again?</p>
            <p id="exit1">Exit</p>
        </div>`

        document.querySelector('#again').addEventListener('click', function (event) {
            location.reload();
        })

        document.querySelector('#exit1').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#game').className='hidelay';
        })
    });

    p7.addEventListener('click', function(event) {
        gametxt.innerHTML =
        `<img src="daisyImgs/daisy-1.jpg" height="315" width="240" alt="daisy puzzle" id="daisy">
        <div id="p1"></div>
        <div id="p2"></div>
        <div id="p3"></div>
        <div id="p4"></div>
        <div id="p5"></div>
        <div id="p6"></div>
        <div id="p7"></div>
        
        <p>Nope!</p>
        <div id="try">
            <p id="again">Try again?</p>
            <p id="exit1">Exit</p>
        </div>`

        document.querySelector('#again').addEventListener('click', function (event) {
            location.reload();
        })

        document.querySelector('#exit1').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#game').className='hidelay';
        })
    });

    

    //mouseover animations--------------

    //for skeleton
    document.addEventListener('mousemove', skullPos);
    const skull = document.querySelector('#skull');
    let skullLoc = 0;

    function skullPos(event) {
        const windowSize = window.innerWidth;
        const percent2px = windowSize / 7; //split window into 7 parts
        const xPos = event.clientX;
        const changePhoto = Math.floor(xPos / percent2px);

        if (changePhoto !== skullLoc) {
            skull.src = `skullImgs/skull-${changePhoto}.jpg`;
            skullLoc = changePhoto;
            console.log(skullLoc);
        }
    };

    //for note
    document.addEventListener('mousemove', notePos);
    const note = document.querySelector('#note');
    let noteLoc = 0;

    function notePos(event) {
        const windowSize = window.innerWidth;
        const percent2px = windowSize / 5; //split window into 5 parts
        const xPos = event.clientX;
        const changePhoto = Math.floor(xPos / percent2px);

        if (changePhoto !== noteLoc) {
            note.src = `noteImgs/note-${changePhoto}.jpg`;
            noteLoc = changePhoto;
            console.log(noteLoc);
        }
    };

    //for label
    document.addEventListener('mousemove', labelPos);
    const label = document.querySelector('#label');
    let labelLoc = 0;

    function labelPos(event) {
        const windowSize = window.innerWidth;
        const percent2px = windowSize / 5; //split into 5 parts
        const xPos = event.clientX;
        const changePhoto = Math.floor(xPos / percent2px);

        if (changePhoto !== labelLoc) {
            label.src = `labelImgs/label-${changePhoto}.jpg`;
            labelLoc = changePhoto;
            console.log(labelLoc);
        }
    };

    //for tree
    document.addEventListener('mousemove', reportPos);
    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        const percent2px = windowSize / 12;
        const xPos = event.clientX;
        const changePhoto = Math.floor(xPos / percent2px);

        if (changePhoto !== prevLoc) {
            tree.src = `treeImgs/tree-${changePhoto}.jpeg`;
            prevLoc = changePhoto;
        }
    }
})();