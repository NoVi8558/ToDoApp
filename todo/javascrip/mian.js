console.info ('toto je výpis z main.js');


const form = document.querySelector('form');
const inputTitle = form.querySelector('input[name=title]');
const cardContainer = document.querySelector('.cards ul');


console.log(form);
console.log(cardContainer);


form.addEventListener('submit', (event)=> {
    event.preventDefault();

    if (!inputTitle.value.trim()) return;

    createNewCard(
        cardContainer,
        inputTitle.value
    );

        inputTitle.value = '';

        inputTitle.focus();

});


// Odstraní kartu
cardContainer.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('delete')) {
      const cardToRemove = event.target.closest('li');
      if (cardToRemove) {
        cardToRemove.remove();
      }
    }
  });