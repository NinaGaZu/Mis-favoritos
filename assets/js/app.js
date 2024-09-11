



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
  cardData.forEach(card => {
    createFlipCard(card.imageSrc, card.name, card.description);
  });
});


/* Llamado footer */
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });