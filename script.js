document.addEventListener('DOMContentLoaded', function() {

    // ======================== Navigation Bar Scroll Effect ========================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ======================== Hero Section Image Fader ========================
    const heroImagesContainer = document.getElementById('hero-images');
    // IMPORTANT: Add the paths to your high-resolution images here
    const images = [
        'path/to/your/image1.jpg',
        'path/to/your/image2.jpg',
        'path/to/your/image3.jpg'
    ];
    let currentImageIndex = 0;

    if (images.length > 0) {
        // Create image elements and add them to the container
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.style.opacity = index === 0 ? '1' : '0'; // Show first image
            heroImagesContainer.appendChild(img);
        });

        const imageElements = heroImagesContainer.getElementsByTagName('img');
        
        setInterval(() => {
            imageElements[currentImageIndex].style.opacity = '0';
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imageElements[currentImageIndex].style.opacity = '1';
        }, 5000); // Change image every 5 seconds
    }


    // ======================== Timeline Interactivity ========================
    const milestones = document.querySelectorAll('.milestone');
    const infoBox = document.getElementById('milestone-info-box');

    milestones.forEach(milestone => {
        milestone.addEventListener('click', () => {
            // Get the information from the 'data-info' attribute
            const infoText = milestone.getAttribute('data-info');
            infoBox.textContent = infoText;
        });
    });


    // ======================== NEW: Scroll Animation For Section Headings ========================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Find all the H2 headings in content sections and tell the observer to watch them
    const sectionHeadings = document.querySelectorAll('.content-section h2');
    sectionHeadings.forEach(heading => {
        observer.observe(heading);
    });

});

