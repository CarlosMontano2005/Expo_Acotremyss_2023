var elementTop = $('.nav').offset().top;
$(window).scroll(function(){
    if($(window).scrollTop()>=elementTop){
        $('body').addClass('nav_fixed');
    }else{
        $('body').removeClass('nav_fixed');
    }
})

$('.btn-menu').on('click',function(){
    $('.nav').toggleClass('nav-toggle');
     $('.btn-menu').toggleClass('btn-menu-hover')
});

const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () =>Move(1);
buttonNext.onclick = () =>Move(2);

function Move(value){
    const tranckWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2)* -1);
    if(leftPosition < (tranckWidth - listWidth) && value == 2){
        track.style.left = `${-1*(leftPosition+slickWidth)}px`;
    }
    else if(leftPosition>0 && value == 1){
        track.style.left = `${-1*(leftPosition-slickWidth)}px`;
    }
}