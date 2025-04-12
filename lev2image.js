let currentSlidesIndex=0
function showSlide(index){
    const slides=document.getElementsByClassName("carousel-slide")
    const dots=document.getElementsByClassName("dot")
    
        if(index >= slides.length)
        {
           currentSlidesIndex=0;
        }
        else if(index < 0){
          currentSlidesIndex=slides.length-1   
        }

        for(let i=0;i<slides.length;i++){
            slides[i].style.display="none";
        }

        for(let i=0; i<dots.length;i++)
        {
            dots[i].className=dots[i].className.replace("dot-active", "");
        }
        slides[currentSlidesIndex].style.display="block"
        dots[currentSlidesIndex].className +=" dot-active"

}

function changeSlide(n){
    showSlide((currentSlidesIndex += n))
}

function currentSlide(n){
    showSlide((currentSlidesIndex = n));
}

showSlide(currentSlidesIndex)

function openPopup() {
    const popup = document.getElementById("imagePopup")
    const popupImage = document.getElementById("popup-image")
    const mainImg = document.querySelector (".carousel-slide")
    const slideImg=document.getElementById("slide1")
    popupImage.src=slideImg.src
    popup.style.display = "flex";
}
function openPopup1() {
    const popup1 = document.getElementById("imagePopup")
    const popupImage1 = document.getElementById("popup-image")
    const mainImg1 = document.querySelector (".carousel-slide")
    const slideImg1=document.getElementById("slide2")
    popupImage1.src=slideImg1.src
    popup1.style.display = "flex";
}
function openPopup2() {
    const popup2 = document.getElementById("imagePopup")
    const popupImage2 = document.getElementById("popup-image")
    const mainImg2 = document.querySelector (".carousel-slide")
    const slideImg2=document.getElementById("slide3")
    popupImage2.src=slideImg2.src
    popup2.style.display = "flex";
}

function closePopup() { 
    const popup = document.getElementById("imagePopup")
    popup.style.display = "none"
}