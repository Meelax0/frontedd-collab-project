const serviceCards =
document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

  card.addEventListener("click", () => {

    const category =
    card.getAttribute("data-category");

    window.location.href =
    `services.html?category=${category}`;

  });

});