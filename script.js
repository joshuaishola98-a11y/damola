const modal = document.getElementById("calendlyModal");

function openCalendly() {
  modal.style.display = "flex";
}

function closeCalendly() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    closeCalendly();
  }
};
