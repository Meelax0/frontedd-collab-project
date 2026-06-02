const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const servicesGrid = document.getElementById('servicesGrid');
const sortSelect = document.getElementById('sortSelect');

// 2. Simple function to render the cards
function displayServices(dataToRender) {
  // Clear the grid first
  servicesGrid.innerHTML = "";

  // Loop through every single item in the array and render it
  for (let i = 0; i < dataToRender.length; i++) {
    const p = dataToRender[i];

    servicesGrid.innerHTML += `
      <div class="service-card">
        <div class="service-card-image">
          ${p.icon}
          <span class="service-card-badge">${p.category}</span>
        </div>
        <div class="service-card-body">
          <h3>${p.name}</h3>
          <div class="specialty">${p.specialty}</div>
          <div class="service-card-meta">
            <div class="service-rating">
              <span class="stars">★★★★★</span>
              <span>${p.rating}</span>
            </div>
            <div class="service-price">${p.price}dzd</div>
          </div>
          <div class="service-card-footer">
            <button class="btn btn-outline btn-sm" onclick="viewDetails(${p.id})">
              View Details
            </button>
            <button class="btn btn-primary btn-sm" onclick="bookService(${p.id})">
              Book Now
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// 3. Simple Sorting Logic
sortSelect.addEventListener('change', function () {
  if (sortSelect.value === 'price-low') {
    professionals.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === 'price-high') {
    professionals.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === 'rating') {
    professionals.sort((a, b) => b.rating - a.rating);
  }
  
  // Re-display the sorted array
  displayServices(professionals);
});

// 4. Navigation & LocalStorage Functions
function viewDetails(id) {
  let selected;
  for (let i = 0; i < professionals.length; i++) {
    if (professionals[i].id === id) {
      selected = professionals[i];
    }
  }
  localStorage.setItem("selectedProfessional", JSON.stringify(selected));
  window.location.href = "service-details.html";
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

// 5. Run immediately on page load to show cards
displayServices(professionals);