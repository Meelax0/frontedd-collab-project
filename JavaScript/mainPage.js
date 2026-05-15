/**
 * ServiFind Client-Side Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Vertical Review Rotation (Hero Dashboard) ---
    const rotateHeroReviews = () => {
        const reviews = document.querySelectorAll('.single-review');
        if (reviews.length === 0) return;

        let currentIndex = 0;
        setInterval(() => {
            reviews[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % reviews.length;
            reviews[currentIndex].classList.add('active');
        }, 5000);
    };

    // --- 2. Stats Counter Animation ---
    const setupStatsCounters = () => {
        const counters = document.querySelectorAll('.counter');
        const observerOptions = { threshold: 0.5 };

        const startCount = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // 2 seconds
                    const speed = target / (duration / 15);

                    const updateCount = () => {
                        const count = +counter.innerText;
                        if (count < target) {
                            counter.innerText = Math.ceil(count + speed);
                            setTimeout(updateCount, 15);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        };

        const observer = new IntersectionObserver(startCount, observerOptions);
        counters.forEach(counter => observer.observe(counter));
    };

    // --- 3. Infinite Smooth Slider Logic (Bottom Slider) ---
    const setupInfiniteSlider = () => {
        const track = document.querySelector('.slide-track');
        if (!track) return;

        // Clone the content to create a seamless infinite loop
        // We clone it once so we have [original][duplicate]
        const clones = track.innerHTML;
        track.innerHTML += clones;

        // Optional: Pause on hover is already handled by CSS animation-play-state
    };

    // --- 4. Interactive Elements ---
    const setupInteractivity = () => {
        const browseBtn = document.getElementById('browsebtn');
        if (browseBtn) {
            browseBtn.addEventListener('click', () => {
                const categories = document.getElementById('categories');
                if (categories) {
                    categories.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        const icons = document.querySelectorAll('.icon');
        icons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                const label = icon.querySelector('p').innerText;
                console.log(`Exploring Category: ${label}`);
            });
        });
    };

    // Initialize all
    rotateHeroReviews();
    setupStatsCounters();
    setupInfiniteSlider();
    setupInteractivity();
});
