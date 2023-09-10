const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const btn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', btn);

  closeModal.addEventListener('click', close);

  overlay.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      close();
    }
  });
}
