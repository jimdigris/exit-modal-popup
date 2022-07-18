(function () {
	 const modal = document.querySelector('.modal_window-closing-page');		// модальное окно
	 let oldCursorY = 0;														// предыдущая позиция курсора во вертикали
	 let cursorY = 0;															// текущая позиция курсора во вертикали
	 let timeOnPage = 0;														// время проведенное на странице в секундах
	 let screenWidth = 0;														// ширина экрана
	 let minScreenWidth = 1200;													// если ширина больше этого значения, то показываем окно
	 let minY = 4;																// если меньше этой координаты, то показываем окно
	 let minTime = 1;															// если провели на странице болльше, то показываем окно

	 // ! ----

	 if (modal) {
		getScreenWidth();														// получим ширину экрана (окна)
		getTimeOnPage();														// отслеживаем время, проведенное на странице
		getCursorY();															// отслеживаем координаты курсора
		showModal();															// запускаем процесс показа модульного окна
		hideModal();															// прячем модальное окно
		checkingPolicy();														// проверка согласия с политикой перс данных
		processButtonClick();													// обработка кн Отправить
	 }

	 // ! ----

	 function getScreenWidth() { screenWidth = window.innerWidth; }				// получим ширину экрана (окна)	 
	 function getTimeOnPage() { setInterval(() => { timeOnPage++; }, 1000); }	// отслеживаем время, проведенное на странице
	 
	 function getCursorY() { document.addEventListener('mousemove', (e) => { 	// отслеживаем координаты курсора
		setTimeout(() => { oldCursorY = cursorY; }, 100);						// получаем предыдущую координату, для отслеживания направления движения курсора		
		cursorY = e.clientY; 													// получаем текущую координату курсора
	 }); }

	 function showModal() {														// запускаем процесс показа модульного окна
		document.addEventListener('mousemove', () => { 

			modal.querySelector('.modal_window-body').addEventListener('click', (evt) => { evt.stopPropagation(); });

			let cookie = getCookie('exit_modal_id');							// получим куки с отметкой показывалось ли уже окно
			if ((!cookie) || (cookie != 'akb1570221')) {						// проверяем было ли уже показано модельное окно
				if ((timeOnPage > minTime) && (cursorY < minY) && (cursorY < oldCursorY) && (screenWidth > minScreenWidth)) { 				
					addClassModal();											// добавляем класс, показывающий модальное окно				
					addCookie();												// добавляем куки
				}				
			}
		}); 	
	 }
	 
	 function hideModal() { modal.addEventListener('click', removeClassModal); }					// прячем модальное окно  
	 function addClassModal() { modal.classList.add('active'); }									// добавляем класс, показывающий модальное окно
	 function removeClassModal() { modal.classList.remove('active'); }								// удаляем класс, показывающий модальное окно
	 function addCookie() { document.cookie = 'exit_modal_id = akb157022; max-age=2629743'; }		// добавляем куки
	 function getCookie(name) { let matches = document.cookie.match(new RegExp( "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")); return matches ? decodeURIComponent(matches[1]) : undefined; }

	 function checkingPolicy() {																	// проверка согласия с политикой конф данных
		let button = modal.querySelector('.modal_window-send');
		let checkbox = modal.querySelector('.modal_window-policy').querySelector('input');
		let labelPolicy = modal.querySelector('.modal_window-label-policy');
		let chekPolicy = modal.querySelector('.modal_window-chek-policy');

		if ((button) && (checkbox) && (labelPolicy) && (chekPolicy)) {
			labelPolicy.addEventListener('click', () => { changeButtonState(checkbox, button); });
			chekPolicy.addEventListener('click', () => { changeButtonState(checkbox, button); });
		}
	
		function changeButtonState(checkbox, button) { if (checkbox.checked) { button.disabled = 'true'; } else { button.removeAttribute('disabled'); }	}		
	 }

	function processButtonClick() {														// нажатие кн Отправить															
		let form = modal.querySelector('.modal_window-form');							// форма
		let button = modal.querySelector('.modal_window-send');							// кнопка
		let handler = '/assets/templates/v3/akb/assets/mail-2/send.php';				// файл для отправки письма
		let infoDiv = 'modal_window-info';												// div в который будет выводиться ответ

		button.addEventListener('click', (event) => {
			event.preventDefault();														// отмена стандартного действия по кнопке
			let input = modal.querySelector('.modal_window-input');						// поле ввода			
			if (input.value != '') { sendMail(form, handler, infoDiv); }				// если не пустое, отправляем сообщение		
		});
	}

	function sendMail(form, php, idModal) {													// отправка формы обратной связи на почту
		let formInfo = document.querySelector(`.${idModal}`);
		showInformation(formInfo, 'expectation');											// вывод сообщения о результатах отправки

		let req = new XMLHttpRequest();
		req.open('POST', php, true);
		req.onload = function () {
			if (req.status >= 200 && req.status < 400) {
				let json = JSON.parse(this.response);

				if (json.result == "success") { showInformation(formInfo, 'success'); }		// Если сообщение отправлено	
					else { showInformation(formInfo, 'error'); }							// Если произошла ошибка				
			} else { showInformation(formInfo, 'error'); }									// Если не удалось связаться с php файлом
		};
		
		req.onerror = function () { alert("Ошибка отправки запроса"); };					// Если не удалось отправить запрос. Стоит блок на хостинге
		req.send(new FormData(form));
		form.reset();
		
		function showInformation(formInfo, sendStatus) {									// выведем информацию об отправке
			if (formInfo) {
				formInfo.style.display = 'block';
				let color, text;

				switch (sendStatus) {
					case 'expectation':
						color = '#cd8f4f';
						text = 'Отправка сообщения.';
						break;

					case 'success':
						color = '#62c169';
						text = 'Сообщение отправлено.';
						break;

					case 'error':
						color = '#e97474';
						text = 'Сообщение не отправлено. Свяжитесь пожалуйста с нами другим способом.';
						break;
				}

				formInfo.style.backgroundColor = color;
				formInfo.style.display = 'flex';
				formInfo.textContent = text;
			}
		}
	}	 
})();