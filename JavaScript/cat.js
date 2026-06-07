
const filterButtons = document.querySelectorAll(".filter-btn");
const serviceCards = document.querySelectorAll(".service-card");

if (filterButtons.length > 0 && serviceCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const targetCategory = button.getAttribute("data-target");

      serviceCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (targetCategory === "all" || targetCategory === cardCategory) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
}
const menuToggle =
document.getElementById("menuToggle");

const nav =
document.querySelector("nav");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}