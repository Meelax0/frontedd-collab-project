const professional = JSON.parse(
  localStorage.getItem("selectedProfessional")
);



document.getElementById("name")
.textContent = professional.name;

document.getElementById("specialty")
.textContent = professional.specialty;

document.getElementById("category")
.textContent = professional.category;

document.getElementById("description")
.textContent = professional.description;

document.getElementById("price")
.textContent =
professional.price + " DA";

document.getElementById("rating")
.textContent = professional.rating;

document.getElementById("reviewsCount")
.textContent =
`(${professional.reviewsCount} reviews)`;



const btnBook =
document.getElementById("btnBook");

btnBook.addEventListener("click", () => {

  window.location.href =
  "reservation.html";

});



const btnServices =
document.getElementById("btnServices");

btnServices.addEventListener("click", () => {

  window.location.href =
  "services.html?category=" +
  professional.category;

});
document.getElementById("badge1")
.innerHTML = `
  <i class="fa-solid fa-check"></i>
  ${professional.badges[0]}
`;

document.getElementById("badge2")
.innerHTML = `
  <i class="fa-solid fa-check"></i>
  ${professional.badges[1]}
`;

document.getElementById("badge3")
.innerHTML = `
  <i class="fa-solid fa-check"></i>
  ${professional.badges[2]}
`;

document.getElementById("badge4")
.innerHTML = `
  <i class="fa-solid fa-check"></i>
  ${professional.badges[3]}
`;
const reviewsContainer =
document.getElementById("reviewsContainer");

professional.reviews.forEach(review => {

  reviewsContainer.innerHTML += `

    <div class="review-item">

      <div class="review-header">

        <div class="review-avatar">
          ${review.user[0]}
        </div>

        <div class="review-meta">

          <h3>${review.user}</h3>

        </div>

      </div>

      <div class="review-stars">
        ★★★★★
      </div>

      <p class="review-text">
        ${review.comment}
      </p>

    </div>

  `;

});