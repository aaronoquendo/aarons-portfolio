var menuBtn = document.getElementsByClassName('hamburger-icon')
var mobileMenu = document.getElementsByClassName('mobile-menu')
var menuOpen = document.getElementsByClassName('fa-bars')
var menuClose = document.getElementsByClassName('fa-times')

var clickedBtn = function(){
  mobileMenu[0].classList.toggle('active')


  menuOpen[0].classList.toggle('not-active')
  menuClose[0].classList.toggle('active')
}


menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])
console.log(menuOpen[0])
console.log(menuClose[0])
// Header Dropdowns Javascript////////////////////////////////////

function hoverMenuToggleOn(){
  var mensDropdown = document.getElementsByClassName("mens-dropdown")
  mensDropdown[0].classList.remove("no-show")
  mensDropdown[0].classList.toggle('show')
}

function hoverMenuToggleOff(){
  var mensDropdown = document.getElementsByClassName("mens-dropdown")
  mensDropdown[0].classList.remove("show")
  mensDropdown[0].classList.toggle('no-show')
}
function navItemToggleWhenOverDropdown(){

}

////////The Owl Carousel function is below///////////////////////
$('.owl-carousel').owlCarousel({
    center:true,
    loop:true,
    margin:10,
    nav:false,
    autoWidth:true,
    dots:false,
    pagination:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
