var menuBtn = document.getElementsByClassName('menu-btn');
var mobileMenu = document.getElementsByClassName('mobile-menu');

// This function opens the mobile menu when mobile menu icon is clicked
var clickedBtn = function(){
  mobileMenu[0].classList.toggle('active');
}
menuBtn[0].addEventListener('click', clickedBtn);

var menuLink = document.getElementsByClassName('menu-link');

//This function closes the mobile menu when a user click a menu item
var closeMenu = function(){
    mobileMenu[0].classList.toggle('active');
}

for(var i = 0; i < menuLink.length; i++){
  menuLink[i].addEventListener('click', closeMenu);
}
