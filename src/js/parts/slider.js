function slider() {
    let slidesIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slidesIndex);


    function showSlides(n) {
        if (n > slides.length) {
            slidesIndex = 1;
        }
        if (n < 1) {
            slidesIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        slides[slidesIndex - 1].style.display = 'block';
        dots.forEach((item) => item.classList.remove('dot-active'));
        dots[slidesIndex - 1].classList.add('dot-active');
    }



    function plusSlides(n) {
        showSlides(slidesIndex += n);
    }

    function currentSlides(n) {
        showSlides(slidesIndex = n);
    }
    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlides(i);
            }
        }
    });
    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });

    let timerSlides = setInterval(autoCollided, 4000);

    function autoCollided() {
        plusSlides(1);
    }
    slides.forEach((item) => item.addEventListener('mouseover', function () {
        clearTimeout(timerSlides);
    }));
    slides.forEach((item) => item.addEventListener('mouseout', function () {
        timerSlides = setInterval(autoCollided, 4000);
    }));
}
export default slider;