
const links = document.querySelectorAll('.nav');
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a.nav");
  const currentPage = location.pathname.split("/").pop(); // ej: anime.html

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});


/*Menú sandwich*/
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}

/* Menú desplegable */
function toggleSubmenu(event, submenuId) {
  event.preventDefault();
  var submenu = document.getElementById(submenuId);
  if (submenu.style.display === "block") {
      submenu.style.display = "none";
  } else {
      submenu.style.display = "block";
  }
}

/* Genera las Cards */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof cardData !== "undefined") {
    cardData.forEach(card => {
      createFlipCard(card.imageSrc, card.name, card.description);
    });
  }
});


/* Llamado footer */
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });