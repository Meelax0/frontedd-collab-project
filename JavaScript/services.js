const params =
new URLSearchParams(window.location.search);

const currentCategory =
params.get("category");

console.log(currentCategory);
const professionals =data[currentCategory] || [];

console.log(professionals);
const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const servicesGrid = document.getElementById('servicesGrid');
const sortSelect = document.getElementById('sortSelect');
function displayServices(dataToRender) {

  servicesGrid.innerHTML = "";

  for (let i = 0; i < dataToRender.length; i++) {

    const p = dataToRender[i];

    servicesGrid.innerHTML += `

      <div class="service-card">

        <div class="service-card-image">

          ${p.icon}

          <span class="service-card-badge">
            ${currentCategory}
          </span>

        </div>

        <div class="service-card-body">

          <h3>${p.name}</h3>

          <div class="specialty">
            ${p.specialty}
          </div>

          <div class="service-card-meta">

            <div class="service-rating">
              ⭐ ${p.rating}
            </div>

            <div class="service-price">
              ${p.price} DZD
            </div>

          </div>

          <div class="service-card-footer">

            <button
              class="btn btn-outline btn-sm"
              onclick="viewDetails(${p.id})"
            >
              View Details
            </button>

            <button
              class="btn btn-primary btn-sm"
              onclick="bookService(${p.id})"
            >
              Book Now
            </button>

          </div>

        </div>

      </div>

    `;
  }
}
displayServices(professionals);


sortSelect.addEventListener('change', function () {
  if (sortSelect.value === 'price-low') {
    professionals.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === 'price-high') {
    professionals.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === 'rating') {
    professionals.sort((a, b) => b.rating - a.rating);
  }
  displayServices(professionals);
});
function viewDetails(id) {
  let selected;
  for (let i = 0; i < professionals.length; i++) {
    if (professionals[i].id === id) {
      selected = professionals[i];
    }
  }
  localStorage.setItem("selectedProfessional", JSON.stringify(selected));
  window.location.href = "serivceDetails.html";
}

function bookService(id) {
  let selected;
  for (let i = 0; i < professionals.length; i++) {
    if (professionals[i].id === id) {
      selected = professionals[i];
    }
  }
  localStorage.setItem("selectedProfessional", JSON.stringify(selected));
  window.location.href = "reservation.html";
}