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




    



