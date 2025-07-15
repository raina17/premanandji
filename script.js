document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation Bar Scroll Effect ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }


    // --- 1. DARSHAN (Image Slideshow Logic) ---
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        const nextArrow = document.querySelector('.next-arrow');
        const prevArrow = document.querySelector('.prev-arrow');
        const dotsContainer = document.querySelector('.slide-dots');

        const images = [
            'leela.png',
            'maharaj_ji_2.png',
            'maharaj_ji_1.png',
            'maharaj_ji_3.png'
        ];

        let currentImageIndex = 0;

        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) img.classList.add('active');
            slideshowContainer.appendChild(img);

            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            dotsContainer.appendChild(dot);
        });

        const imageElements = document.querySelectorAll('.slideshow-container img');
        const dotElements = document.querySelectorAll('.dot');

        function showImage(index) {
            imageElements.forEach(img => img.classList.remove('active'));
            dotElements.forEach(dot => dot.classList.remove('active'));
            imageElements[index].classList.add('active');
            dotElements[index].classList.add('active');
            currentImageIndex = index;
        }

        nextArrow.addEventListener('click', () => {
            let nextIndex = currentImageIndex + 1;
            if (nextIndex >= images.length) nextIndex = 0;
            showImage(nextIndex);
        });

        prevArrow.addEventListener('click', () => {
            let prevIndex = currentImageIndex - 1;
            if (prevIndex < 0) prevIndex = images.length - 1;
            showImage(prevIndex);
        });

        dotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                const index = parseInt(e.target.dataset.index, 10);
                showImage(index);
            }
        });
        
        setInterval(() => { nextArrow.click(); }, 2000);
    }


    // --- 2. LEELA PATH (Scroll Animation Logic) ---
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        timelineItems.forEach(item => observer.observe(item));
    }


    // --- 2. LEELA PATH (Floating Particles Animation - UPDATED) ---
    const particleContainer = document.querySelector('.particles-background');
    if (particleContainer) {
        const particlesToCreate = 50;
        for (let i = 0; i < particlesToCreate; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            if (Math.random() > 0.5) {
                particle.classList.add('float-up');
            } else {
                particle.classList.add('float-down');
            }
            
            const size = Math.random() * 15 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            
            const duration = Math.random() * 12 + 8;
            particle.style.animationDuration = `${duration}s`;

            const delay = Math.random() * 10;
            particle.style.animationDelay = `${delay}s`;
            
            particle.style.opacity = Math.random();
            particleContainer.appendChild(particle);
        }
    }


    // --- 3 & 4. AMRIT VANI (Video Filter Logic) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoCards = document.querySelectorAll('.video-card');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;

                videoCards.forEach(card => {
                    card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
                });
            });
        });
    }

    const medContainer = document.querySelector('.meditation-container');
    const medText = document.querySelector('.meditation-text');
    
    if (medContainer && medText) {
        const breathTime = 4000;
        const holdTime = 7000;
        const exhaleTime = 4000; 

        function breathAnimation() {
            medText.innerText = 'Inhale';
            medContainer.classList.add('grow');
            medContainer.classList.remove('shrink');

            setTimeout(() => {
                medText.innerText = 'Hold';

                setTimeout(() => {
                    medText.innerText = 'Exhale';
                    medContainer.classList.add('shrink');
                    medContainer.classList.remove('grow');
                }, holdTime);
            }, breathTime);
        }

        breathAnimation();
        setInterval(breathAnimation, breathTime + holdTime + exhaleTime);
    }

});