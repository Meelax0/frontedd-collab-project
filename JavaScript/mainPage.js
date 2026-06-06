document.addEventListener('DOMContentLoaded', () => {
    
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

    const setupInfiniteSlider = () => {
        const track = document.querySelector('.slide-track');
        if (!track) return;
        const clones = track.innerHTML;
        track.innerHTML += clones;
    };

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
    rotateHeroReviews();
    setupStatsCounters();
    setupInfiniteSlider();
    setupInteractivity();
});
const menuToggle=document.getElementById("menuToggle");

const nav=document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

    nav.classList.toggle("active");

});