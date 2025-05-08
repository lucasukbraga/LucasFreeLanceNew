// Animation Trigger - Contact
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.work-together-heading, .text-muted').forEach(el => {
    observer.observe(el);
});


const isMobileOrTablet = window.innerWidth <= 1024; // Adjusting for tablets as well

const appearOptions = {
    root: null,
    threshold: isMobileOrTablet ? 0.1 : 0.7,  // 1 for mobile & tablets, 0.7 for desktop
    rootMargin: "150px"
};

const faders = document.querySelectorAll('.fadeIn');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));



// Nav bar change color as soon as scroll down away from the hero container //

window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    const heroSection = document.querySelector(".container-hero");
    const heroHeight = heroSection.offsetHeight;
    
    if (window.scrollY > heroHeight) {
        navbar.style.background = "#1A1A1A"; // New color after scrolling
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.1)"; // Default transparent
    }
});

// Nav bar change on mobile as soon as scroll down away from the hero container //

// Wait for 4 seconds (4000 milliseconds)
setTimeout(() => {
    // Select the element and add the transition class
    const element = document.querySelector('.teste');
    element.classList.add('transition');
  }, 3500); // 4 seconds delay

  // Wait for 4 seconds (4000 milliseconds)
setTimeout(() => {
    // Select the element and add the transition class
    const element = document.querySelector('.lb');
    element.classList.add('transition');
  }, 2800); // 4 seconds delay

