document.getElementById('voltar-topo').addEventListener('click', function(e) {
    e.preventDefault(); // impede o pulo seco do href="#"
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

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