



// Initialize Carousel
const myCarousel = new bootstrap.Carousel('#videoCarousel', {
    interval: 6000,
    wrap: true
  });
  
  
  
  // Nav Bar menu mobile //
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    elements.forEach(el => observer.observe(el));
  });

  

  document.querySelectorAll('.service-box').forEach(box => {
    const frontFace = box.querySelector('.service-front');
    const backFace = box.querySelector('.service-back');
    const hireBtn = box.querySelector('.hire-btn');
    const service = box.getAttribute('data-service');
  
    // Set the WhatsApp link
    const message = `Hi, I was visiting your website and would like to do a quotation on a ${service} service.`;
    const whatsappURL = `https://wa.me/447514996775?text=${encodeURIComponent(message)}`;
    hireBtn.setAttribute('href', whatsappURL);
  
    // Flip to back on front face click
    frontFace.addEventListener('click', () => {
      // Close other flipped cards
      document.querySelectorAll('.service-box.flipped').forEach(otherBox => {
        if (otherBox !== box) otherBox.classList.remove('flipped');
      });
      box.classList.add('flipped');
    });
  
    // Flip back when clicking on the back (except "Hire" button)
    backFace.addEventListener('click', (e) => {
      if (!e.target.classList.contains('hire-btn')) {
        box.classList.remove('flipped');
      }
    });
  });





  document.querySelectorAll('.filter-bar button').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.media-item').forEach(item => {
        item.style.display =
          filter === 'all' || item.classList.contains(filter) ? 'block' : 'none';
      });
    });
  });
  
  // Example dynamic item insert (you’d replace this with backend or admin input)
  function addMediaItem(type, src, category) {
    const container = type === 'video' ? document.getElementById('video-gallery') : document.getElementById('image-gallery');
    const item = document.createElement('div');
    item.className = `media-item ${category}`;
    item.innerHTML = type === 'video'
      ? `<video controls><source src="${src}" type="video/mp4"></video>`
      : `<img src="${src}" alt="${category} photo">`;
    container.prepend(item); // Newest on top
  }


  function filterMedia(type) {
    document.querySelectorAll('.gallery-item').forEach(el => {
      const match = el.getAttribute('data-type') === type || type === 'all';
      el.style.display = match ? 'block' : 'none';
    });

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }