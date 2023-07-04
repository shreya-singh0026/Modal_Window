'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden'); //remove kr dega hidden mode ko toh modal show ho jaiga
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); //modal ko hide kr dega
  overlay.classList.add('hidden'); // modal ko hide kr dega
};

for (
  let i = 0;
  i < btnOpenModal.length;
  i++ //console.log(btnOpenModal[i].textContent);
) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e, 'A key is pressed');
  console.log(e.key, ' is pressed');
  // if (e.key == 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     //modal is currently hidden  =>(modal.classList.contains('hidden')
  //     closeModal();
  //   }
  // }
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    //modal is currently hidden  =>(modal.classList.contains('hidden')
    closeModal();
  }
});
