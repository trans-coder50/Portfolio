var menueIcon = document.querySelector(".nav-icon3");
var menueOffIcon = document.querySelector(".nav-icon4");
var navigation = document.querySelector(".navigation");
var chevronOneOne = document.querySelector(".chevron-one-one");
var chevronOne = document.querySelector(".chevron-one");
var chevronTwoTwo = document.querySelector(".chevron-two-two");
var chevronTwo = document.querySelector(".chevron-two");
var chevronThreeThree = document.querySelector(".chevron-three-three");
var chevronThree = document.querySelector(".chevron-three");
var skillsFront = document.querySelector(".skills-front");
var skillsBack = document.querySelector(".skills-back");
var skillsDésign = document.querySelector(".skills-désign");

chevronOne.onclick = function(){
    'use strict';
    chevronOne.style.display = "none";
    chevronOneOne.style.display = "block";
    skillsFront.style.display = "block";
}
chevronOneOne.onclick = function(){
    'use strict';
    chevronOne.style.display = "block";
    chevronOneOne.style.display = "none";
    skillsFront.style.display = "none";
}
chevronTwo.onclick = function(){
    'use strict';
    chevronTwo.style.display = "none";
    chevronTwoTwo.style.display = "block";
    skillsBack.style.display = "block";
}
chevronTwoTwo.onclick = function(){
    'use strict';
    chevronTwo.style.display = "block";
    chevronTwoTwo.style.display = "none";
    skillsBack.style.display = "none";
}
chevronThree.onclick = function(){
    'use strict';
    chevronThree.style.display = "none";
    chevronThreeThree.style.display = "block";
    skillsDésign.style.display = "block";
}
chevronThreeThree.onclick = function(){
    'use strict';
    chevronThree.style.display = "block";
    chevronThreeThree.style.display = "none";
    skillsDésign.style.display = "none";
}

menueIcon.onclick = function(){
    "use strict";
    menueIcon.style.display = "none";
    menueOffIcon.style.display = "block";
    navigation.style.bottom = "300px"
}
menueOffIcon.onclick = function(){
    "use strict";
    menueIcon.style.display = "block";
    menueOffIcon.style.display = "none";
    navigation.style.bottom = "0"
}






const button = document.querySelector('.slide-up');
const targetDiv = document.querySelector('footer');
const fastarrow = document.querySelector(".up svg");

function isOverlapping(elem1, elem2) {
    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();

     return (
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top     
    )
}

function checkOverlap() {
    if (isOverlapping(button, targetDiv)) {
        button.style.background = "white";
        fastarrow.style.fill = "#00CB00";
    } else {
        button.style.background = "#00CB00";
        fastarrow.style.fill = "white";
    }
}

window.addEventListener('scroll', checkOverlap);
window.addEventListener('resize', checkOverlap); // To handle window resizing
checkOverlap(); // Initial check




    



