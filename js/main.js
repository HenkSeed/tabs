const markStones = document.querySelectorAll('.mark-stone');
const choiceTexts = document.querySelectorAll('.choice-text');
const choiceImgs = document.querySelectorAll('.choice-imgs');
console.log('choiceImgs: ', choiceImgs);

markStones.forEach((markStone) => {
	markStone.addEventListener('click', (event) => {
		const dataDirection = markStone.dataset.direction;
		console.log('dataDirection: ', dataDirection);

		markStones.forEach((item) => {
			if (item === event.target) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}
		});

		choiceTexts.forEach((choiceText) => {
			if (choiceText.dataset.direction === dataDirection) {
				choiceText.classList.remove('hidden');
			} else {
				choiceText.classList.add('hidden');
			}
		});

		choiceImgs.forEach((choiceImg) => {
			if (choiceImg.dataset.direction === dataDirection) {
				choiceImg.classList.remove('hidden');
			} else {
				choiceImg.classList.add('hidden');
			}
		});
	});
});
