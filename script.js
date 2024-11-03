// Throttled parallax effect for the hero background
let lastScrollTop = 0;
const hero = document.getElementById('hero');

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    
    if (Math.abs(currentScroll - lastScrollTop) > 5) { // Adjust threshold as needed
        hero.style.backgroundPositionY = currentScroll * 0.5 + 'px';
        lastScrollTop = currentScroll;
    }
});
