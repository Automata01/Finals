const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));

// Clone slides to create a seamless loop
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
});