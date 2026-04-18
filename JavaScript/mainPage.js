/* Floating Cards and Review swipe */
function rotateReviews() {
        const reviews = document.querySelectorAll('.single-review');
        let currentIndex = 0;

        setInterval(() => {
            reviews[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % reviews.length;
            reviews[currentIndex].classList.add('active');
        }, 4000); // 4 seconds interval
    }

    document.addEventListener('DOMContentLoaded', rotateReviews);