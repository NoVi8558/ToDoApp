console.info ('toto je výpis z functions.js');

/**
 * 
 * @param {HTMLElement} container 
 * @param {String} title 
 */
function createNewCard(container, title,) {
	
	let newCard = document.createElement('li');
	newCard.className = "myCards"

	newCard.innerHTML = `
		<input type="checkbox">
		<span>${title}</span>
		<button class="delete">Tímto to smažeš 😒</button>
	`;


	container.appendChild(newCard);
}