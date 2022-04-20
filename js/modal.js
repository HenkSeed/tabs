const modal = document.querySelector('.modal');
const modalClose = modal.querySelectorAll('.modal-close');
const overlay = modal.querySelector('.overlay');
const choiceText = document.querySelectorAll('.choice-text');
const modalWrapper = modal.querySelectorAll('.modal-wrapper');

// console.log('choiceText: ', choiceText);

// ===== Обработка щелчка на текст выбранного направления (Start)
choiceText.forEach((choice) => {
	choice.addEventListener('click', () => {
		const choiceData = choice.dataset.direction;
		modal.classList.remove('hidden');
		const dataReceived = (array, dataValue) => {
			array.forEach((dataItem) => {
				// Если элемент массива имеет дата-атрибут как в нажатой закладке
				if (dataItem.dataset.direction === dataValue) {
					// Делаем его видимым
					// console.log('Делаем его видимым');
					dataItem.classList.remove('hidden');
					// console.log('dataItem: ', dataItem);
					// Все остальные элементы массива скрываем
				} else {
					// скрываем
					// console.log('Скрываем');
					dataItem.classList.add('hidden');
				}
			});
		};
		dataReceived(modalWrapper, choiceData);
	});
});
// ----- Обработка щелчка на текст выбранного направления (End)

// ========= Закрываем модальное окно (Start)

modalClose.forEach((modalCross) => {
	modalCross.addEventListener('click', () => {
		// На крестик
		modal.classList.add('hidden');
	});
});

overlay.addEventListener('click', () => {
	modal.classList.add('hidden'); // Мимо окна
});
// --------- Закрываем модальное окно (End)
