let sliderImages = document.querySelectorAll('.slide'),
leftArrow = document.querySelector('#left-arrow'),
rightArrow = document.querySelector('#right-arrow')
current = 0;

//clear All Images
function reset() {
    for(let i=0; i < sliderImages.length; i++){
        sliderImages[i].stylee.display = "none";
    }
}

//init slide
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

//show previous Image
function leftSlide() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--
}

//show next Image
function rightSlide() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++
}

//left arrow click
leftArrow.addEventListener('click',function(){
    if(current === 0){
        current = sliderImages.length;
    }
    leftSlide();
});

//Right arrow click 
rightArrow.addEventListener('click',function() {
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    rightSlide();
});

startSlide();