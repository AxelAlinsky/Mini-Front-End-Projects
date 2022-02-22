var containerID = document.getElementById('containerID');
var burgerOneID = document.getElementById('burgerOneID');
var burgerThreeID = document.getElementById('burgerThreeID');
var burgerTwoID = document.getElementById('burgerTwoID');
var burgerFourID = document.getElementById('burgerFourID');
var burgerFiveID = document.getElementById('burgerFiveID');
var toggleMenu = false

containerID.addEventListener('click', function(){
    if(!toggleMenu) {
        burgerOneID.classList.add('burgerOneOn')
        burgerTwoID.classList.add('burgerTwoOn')
        burgerThreeID.classList.add('burgerThreeOn')
        burgerFourID.classList.add('burgerFourOn')
        burgerFiveID.classList.add('burgerFiveOn')
        toggleMenu = true 
    }   else {
        burgerOneID.classList.remove('burgerOneOn')
        burgerTwoID.classList.remove('burgerTwoOn')
        burgerThreeID.classList.remove('burgerThreeOn')
        burgerFourID.classList.remove('burgerFourOn')
        burgerFiveID.classList.remove('burgerFiveOn')
        toggleMenu = false
    }
})