// Выбираем в псевдо-массив все закладки
const markStones = document.querySelectorAll('.mark-stone');
// Выбираем в псевдо-массив все заголовки выбора
const choiceTexts = document.querySelectorAll('.choice-text');
// Выбираем в псевдо-массив все строки картинок
const choiceImgs = document.querySelectorAll('.choice-imgs');

// Перебираем все закладки
markStones.forEach((markStone) => {
	// На каждую закладку навешиваем обработчик нажатий мыши
	markStone.addEventListener('click', (event) => {
		// Получаем значение дата-атрибута "direction" у нажатой закладки
		const dataDirection = markStone.dataset.direction;

		// Описание процедуры обработки переключаемых элементов
		// аргументы - массив элементов, значение дата-атрибута
		const dataChoice = (array, dataValue) => {
			array.forEach((dataItem) => {
				// Если элемент массива имеет дата-атрибут как в нажатой закладке
				if (dataItem.dataset.direction === dataValue) {
					// Делаем его видимым
					dataItem.classList.remove('hidden');
					// Все остальные элементы массива скрываем
				} else {
					// скрываем
					dataItem.classList.add('hidden');
				}
			});
		};

		// Обрабатываем нажатие таба (меняем активную вкладку)
		markStones.forEach((item) => {
			if (item === event.target) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}
		});
		// Вызываем процедуру обработки переключения текста заголовка выбора
		dataChoice(choiceTexts, dataDirection);
		// Вызываем процедуру обработки переключения строки изображений
		dataChoice(choiceImgs, dataDirection);
	});
});
