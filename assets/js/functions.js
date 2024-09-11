// Función para crear una flip card
function createFlipCard(imageSrc, name, description) {
  const flipCard = document.createElement('div');
  flipCard.classList.add('flip-card');

  const flipCardInner = document.createElement('div');
  flipCardInner.classList.add('flip-card-inner');

  const flipCardFront = document.createElement('div');
  flipCardFront.classList.add('flip-card-front');

  const flipCardBack = document.createElement('div');
  flipCardBack.classList.add('flip-card-back');

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = name;
  img.style.width = '300px';
  img.style.height = '300px';
  flipCardFront.appendChild(img);

  const h1 = document.createElement('h1');
  h1.textContent = name;

  const p1 = document.createElement('p');
  p1.textContent = description;

  flipCardBack.appendChild(h1);
  flipCardBack.appendChild(p1);

  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);

  flipCard.appendChild(flipCardInner);

  document.getElementById('flip-card-container').appendChild(flipCard);
}
