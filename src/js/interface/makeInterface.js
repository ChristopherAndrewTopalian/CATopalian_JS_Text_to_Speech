// makeInterface.js

function makeInterface()
{
    let theText = ce('textarea');
    theText.id = 'theText';
    theText.placeholder = 'Enter Text Here';
    theText.style.width = '95%';
    theText.style.height = '200px';
    ba(theText);

    let enterBtn = ce('button');
    enterBtn.textContent = 'READ TEXT';
    enterBtn.onclick = function()
    {
        readText('theText');
    };
    ba(enterBtn);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

