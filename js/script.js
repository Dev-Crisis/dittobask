let nav = document.querySelector('nav#nav-mobile');
let navToggles = document.querySelectorAll('.nav-toggle');
let cards = document.querySelectorAll('.card');
let foundersBtn = document.querySelector('#founders');
let helpersBtn = document.querySelector('#helpers');
let allBtn = document.querySelector('#all');
let fireworks = document.querySelectorAll('.firework');

navToggles.forEach((e, i) => {
  e.addEventListener('click', () => {
    nav.classList.toggle('right-0');
    nav.classList.toggle('right-full');
  }, {passive: true});
});

foundersBtn.addEventListener('click', () => {
  cards.forEach((e, i) => {
    e.classList.contains('founders') ? e.classList.remove('hidden') : e.classList.add('hidden');
  })
}, {passive: true});

helpersBtn.addEventListener('click', () => {
  cards.forEach((e, i) => {
    e.classList.contains('helpers') ? e.classList.remove('hidden') : e.classList.add('hidden');
  })
}, {passive: true});

allBtn.addEventListener('click', () => {
  cards.forEach((e, i) => {
    e.classList.remove('hidden');
  })
}, {passive: true});

setTimeout(() => {
  fireworks.forEach((e,i) => {
    e.classList.add('hidden')
  });
}, 5000);