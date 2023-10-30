(function () {
    'use strict';
    console.log("reading js");

    const start = document.querySelector('#start'); //start, opens part 1 of the form
    const p1 = document.querySelector('#p1');
    const toP2 = document.querySelector('#toP2'); //open part 2 of the form
    const p2 = document.querySelector('#p2');
    const toP3 = document.querySelector('#toP3'); //open part 3 of the form
    const p3 = document.querySelector('#p3');
    const form = document.querySelector('form');

    //mad lib result
    const overlay = document.querySelector('#overlay');
    const result = document.querySelector('#result');


    //buttons that progress thru the form
    start.addEventListener('click', function(event) {
        p1.className = "showing";
        start.className = "hidden";
    })

    toP2.addEventListener('click', function(event) {
        p2.className = "showing";
        toP2.className = "hidden";
    })

    toP3.addEventListener('click', function(event) {
        p3.className = "showing";
        toP3.className = "hidden";
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fName = document.querySelector('#fName').value;
        const animal = document.querySelector('#animal').value;
        const aName = document.querySelector('#aName').value;
        const build = document.querySelector('#build').value;
        const country = document.querySelector('#country').value;
        const noun = document.querySelector('#noun').value;
        const insult = document.querySelector('#insult').value;
        const num1 = document.querySelector('#num1').value;
        const num2 = document.querySelector('#num2').value;
        const uTime = document.querySelector('#uTime').value;
        const bPart = document.querySelector('#bPart').value;
        const color = document.querySelector('#color').value;
        const title = document.querySelector('#title').value;

        let myText = '';

        //the alerts do NOT work for some reason
        if (fName == '') {
            //alert("Please provide a famous person's name.");
            document.querySelector('#fName').focus();
        } else if (animal == '') {
            //alert("Please provide an animal.");
            document.querySelector('#animal').focus();
        } else if (aName == '') {
            //alert("Please provide a name.");
            document.querySelector('#aName').focus();
        } else if (build == '') {
            //alert("Please provide a building.");
            document.querySelector('#build').focus();
        } else if (country == '') {
            //alert("Please provide a country.");
            document.querySelector('#country').focus();
        } else if (noun == '') {
            //alert("Please provide a noun.");
            document.querySelector('#noun').focus();
        } else if (insult == '') {
            //alert("Please provide an insult.");
            document.querySelector('#insult').focus();
        } else if (num1 == '') {
            //alert("Please provide a number.");
            document.querySelector('#num1').focus();
        } else if (num2 == '') {
            //alert("Please provide another number.");
            document.querySelector('#num2').focus();
        } else if (uTime == '') {
            //alert("Please provide a unit of time.");
            document.querySelector('#uTime').focus();
        } else if (bPart == '') {
            //alert("Please provide a body part (plural).");
            document.querySelector('#bPart').focus();
        } else if (color == '') {
            //alert("Please provide a color.");
            document.querySelector('#color').focus();
        } else if (title == '') {
            //alert("Please provide something cool to call yourself.");
            document.querySelector('#title').focus();
        } else {
            overlay.className = "showverlay";

            myText =
            `
            <h3>Your finished note:</h3>
            <p>Dear ${fName},</p>

            <p>I regret to inform you that I am currently in possession of your pet ${animal}, ${aName}. Do NOT call the cops on me, or I will most definitely send your precious little animal baby to a remote ${build} in ${country} where you will never see them again. It’s what you get for refusing to sign my ${noun}. That was supposed to be a big emotional moment for me, and you RUINED IT, ${insult}.</P>
            
            <p>Anyway, if you want to see your pet again, you must wire me ${num1} dollars within the next ${num2} ${uTime} or I will gradually dye all of its ${bPart} with ${color} Sharpie ink until its a stinky, ugly mess. You do NOT want to mess with me. You have only yourself to blame.</P>
            
            <p>Signed,</p>
            <p>${title}</p>
            
            <p><a id="exit">MAKE ANOTHER NOTE?</a></p>`;

            //make all textboxes blank again
            document.querySelector('#fName').value = '';
            document.querySelector('#animal').value = '';
            document.querySelector('#aName').value = '';
            document.querySelector('#build').value = '';
            document.querySelector('#country').value = '';
            document.querySelector('#noun').value = '';
            document.querySelector('#insult').value = '';
            document.querySelector('#num1').value = '';
            document.querySelector('#num2').value = '';
            document.querySelector('#uTime').value = '';
            document.querySelector('#bPart').value = '';
            document.querySelector('#color').value = '';
            document.querySelector('#title').value = '';
        }

        result.innerHTML = myText;

        //exit results
        document.querySelector('#exit').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#overlay').className='hidelay';
        })

        document.addEventListener('keydown', function (event) {
            if (event.key==='Escape') {
                document.querySelector('#overlay').className='hidelay';
            }
        })
    });

})();