(function () {
    'use strict';
    console.log('tis javascript my love');

    //buttons that change the info box when clicked
    const header = document.querySelector('header'); //takes you back home
    const nancy = document.querySelector('#nancy'); //nancy drew info
    const fairy = document.querySelector('#fairy'); //fairyopolis info
    const kit = document.querySelector('#kit'); //kit's world info

    const info = document.querySelector('#info'); //info box

    header.addEventListener('click', function (event) {
        info.innerHTML = `<p>Hello! This is a site for looking at all the silly fun interactive books I enjoyed reading as a kid. Click on a book to get started!</p>`;
    });

    //nancy info

    nancy.addEventListener('click', function (event) {
        info.innerHTML =
        `<h1>The Lost Files of Nancy Drew</h1>

        <div id=container>
        <img src="images/nBook.jpg" height="360" width="600" alt="nancy drew page spread"></img>

        <div id="nPop">

        <img src="skullImgs/skull-0.jpg" height="200" width="200" alt="skeleton blueprint" id="skull" class="space"></img>

        <img src="labelImgs/label-0.jpg" height="200" width="200" alt="bottle label" id="label" class="space"></img>
        </div>

        <div>

        <p>A book chronicling fictional girl detective Nancy Drew's various mysteries. Pictured above is a spread of a mystery regarding a talented musician's death, and his missing music sheets (which of course, can be sold for a lot of money if found...).</p>
        
        <p>The culprit goes through extreme lengths to get away with their crime, including the use of poisonous spiders and a secret attic compartment...</p>`;

        //mouseover animations
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
        }

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
        }
    });


    //fairy info

    fairy.addEventListener('click', function (event) {
        info.innerHTML =
        `<h1>Fairyopolis: A Flower Fairies Journal</h1>

        <img src="images/fBook.jpg" height="362" width="600" alt="fairyopolis spread"></img>

        <img src="daisyImgs/daisy-0.jpg" height="630" width="480" alt="daisy puzzle" id="daisy"></img>

        <p>A whimsical book about an adult woman trying to prove that fairies exist (much more heartwarming than it sounds). Uses a whimsical script font to emulate a journal/diary feel. Pictured above is a silly little puzzle about daisy fairies, who live under (you guessed it) daisy petals. You're supposed to flip the petals and guess where the fairy is. </p>`;

        //mouseover animations
        document.addEventListener('mousemove', reportPos);
        const daisy = document.querySelector('#daisy');
        let prevLoc = 0;

        function reportPos(event) {
            const windowSize = window.innerWidth;
            const percent2px = windowSize / 8;
            const xPos = event.clientX;
            const changePhoto = Math.floor(xPos / percent2px);

            if (changePhoto !== prevLoc) {
                daisy.src = `daisyImgs/daisy-${changePhoto}.jpg`;
                prevLoc = changePhoto;
                console.log(prevLoc);
            }
        }
    });


    //kit info ------------------------------------------------

    kit.addEventListener('click', function (event) {
        info.innerHTML =
        `<h1>Kit's World</h1>

        <img src="treeImgs/tree-0.jpeg" height="450" width="750" alt="treehouse pop-up" id="tree"></img>

        <p>Historical fiction about a girl named Kit, and her daily life during the Great Depression. Pictured above is a treehouse her dad built at her request. Really putting the "fiction" in "historical fiction here.</p>`;

        //pop-up animation
        document.addEventListener('mousemove', reportPos);
        const tree = document.querySelector('#tree');
        let prevLoc = 0;

        function reportPos(event) {
            const windowSize = window.innerWidth;
            const percent2px = windowSize / 12;
            const xPos = event.clientX;
            const changePhoto = Math.floor(xPos / percent2px);

            if (changePhoto !== prevLoc) {
                tree.src = `treeImgs/tree-${changePhoto}.jpeg`;
                prevLoc = changePhoto;
                console.log(prevLoc);
            }
        }

    });

})();