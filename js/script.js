const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slides = document.querySelectorAll('.slide');
let active = 0;
let total = slides.length;

next.addEventListener('click', () => {
  update(1);
});

prev.addEventListener('click', () => {
  update(-1);
});

function update(direction) {
  slides[active].classList.remove('active'); // Remove a classe 'active' do slide atual

  if (direction < 0) {
  
    slides[active].classList.add('prev');
    active = (active - 1 + total) % total;
    slides[active].classList.add('active'); 
    setTimeout(() => slides[active].classList.remove('prev'), 1000); 
  } else {
    // Para a direção positiva (next)
    slides[active].classList.add('next');
    active = (active + 1) % total;
    slides[active].classList.add('active'); 
  }
}


























































document.getElementById('voltar-about').addEventListener('click', function(e) {
    e.preventDefault(); // impede o pulo seco do href="#"
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('voltar-project').addEventListener('click', function(e) {
    e.preventDefault(); // impede o pulo seco do href="#"
    window.scrollTo({ top: 500, behavior: 'smooth' });
});

document.getElementById('voltar-message').addEventListener('click', function(e) {
    e.preventDefault(); // impede o pulo seco do href="#"
    window.scrollTo({ top: 2000, behavior: 'smooth' });
});

document.getElementById('voltar-skills').addEventListener('click', function(e) {
    e.preventDefault(); // impede o pulo seco do href="#"
    window.scrollTo({ top: 1500, behavior: 'smooth' });
});