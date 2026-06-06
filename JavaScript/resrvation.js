const professional = JSON.parse(localStorage.getItem("selectedProfessional"));
if (!professional) {
  window.location.href = "services.html";
}
document.getElementById("professionalIcon").textContent = professional.icon;
document.getElementById("professionalName").textContent = professional.name;
document.getElementById("professionalSpecialty").textContent =
  professional.specialty;
document.getElementById("bookingDate").min = new Date()
  .toISOString()
  .split("T")[0];
const reservationForm = document.getElementById("reservationForm");
reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const reservationData = {
    professional: professional.name,
    clientName: document.getElementById("clientName").value,
    email: document.getElementById("clientEmail").value,
    phone: document.getElementById("clientPhone").value,
    date: document.getElementById("bookingDate").value,
    notes: document.getElementById("notes").value,
  };
  localStorage.setItem("reservation", JSON.stringify(reservationData));
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
  reservationForm.reset();
});
