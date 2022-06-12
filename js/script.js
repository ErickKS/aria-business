// NAV

const btnMobile = document.getElementById('btn-mobile')
const nav = document.getElementById('navigation')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

// CLOSE NAV ON CLICK UL -> A 

function closeNav() {
    nav.classList.toggle('active')
}

// NAV FIXA 

$(window).width()

let navFixed = false;

$(window).scroll(function() {
    let scrollPosition = $(window).scrollTop();
  
    if(scrollPosition < 10 && !navFixed) {
        navFixed = true;
        $('#nav').removeClass('navFixed');
    }
  
    if(scrollPosition > 10 && navFixed) {
        navFixed = false;
        $('#nav').addClass('navFixed');
    }
});

// SCROLL NAV EFFECT

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    activateMenuCurrentSection(home)
    activateMenuCurrentSection(intro)
    activateMenuCurrentSection(services)
    activateMenuCurrentSection(call)
    activateMenuCurrentSection(projects)
    activateMenuCurrentSection(about)
    activateMenuCurrentSection(contact)
}

function activateMenuCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
    
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
    
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu li a[href*=${sectionId}]`)

    menuElement.classList.remove('selected')
    if (sectionBoundaries){
        menuElement.classList.add('selected')
    }
}

// ADDITIONAL 1 ANIMATION

$('.group').click(function showText(){
    if ($(this).hasClass('active')){
        $('.group.active p').slideToggle();
        $(this).removeClass('active');
    } else {
        $('.group.active p').slideToggle();
        $('.group').removeClass('active');
        $(this).addClass('active');
        $('.group.active p').slideToggle();
    }
});

// ADDITIONAL 2 ANIMATION 

$('.additional-2-tittle:nth-of-type(1)').click(function(){
    $('.additional-2-tittle').removeClass('active');
    $(this).addClass('active');
    $('.content-expertise, .content-quality').css("display", "none");
    $('.content-business').fadeIn();
});

$('.additional-2-tittle:nth-of-type(2)').click(function(){
    $('.additional-2-tittle').removeClass('active');
    $(this).addClass('active');
    $('.content-business, .content-quality').css("display", "none");
    $('.content-expertise').fadeIn();
});

$('.additional-2-tittle:nth-of-type(3)').click(function(){
    $('.additional-2-tittle').removeClass('active');
    $(this).addClass('active');
    $('.content-business, .content-expertise').css("display", "none");
    $('.content-quality').fadeIn();
});

// SLIDER

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 790,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
    ]
});