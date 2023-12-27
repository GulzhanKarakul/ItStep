// Number.prototype.times = function(callbackFn){
	// for(let i = 0; i < this; i++) callbackFn(i);
// }

let forms = document.querySelectorAll('.form');
let buttons = document.querySelectorAll('.next-button');
let endTestButton = document.querySelector(".end-test");
let totalSum = 0;

buttons.forEach(button => {
  button.addEventListener('click', switchForm);
});

endTestButton.addEventListener('click', switchAnswer);

function switchForm(event) {
  let currentIndex = Array.from(buttons).indexOf(event.target);
  let currentForm = forms[currentIndex];
  let radios = currentForm.querySelectorAll('input[type="radio"]');
  let formSum = 0;

  radios.forEach(radio => {
    if (radio.checked) {
      formSum += parseInt(radio.value);
    }
  });

  totalSum += formSum;

  localStorage.setItem('currentIndex', currentIndex); //---------------------------setItem устанавливает ключ значение в  localStorage
  localStorage.setItem('totalSum', totalSum);

  currentForm.classList.remove('active');
  if (currentIndex < forms.length - 1) {
    forms[currentIndex + 1].classList.add('active');
  } 
  console.log(`Общая сумма: ${totalSum}`);
}

function switchAnswer(event){
  const currentForm = document.querySelector('.active');
	currentForm.classList.remove('active');
	let firstAnswer = document.querySelector(".firstAnswer");
    let secondAnswer = document.querySelector(".secondAnswer");
    let thirdAnswer = document.querySelector(".thirdAnswer");
    localStorage.removeItem('totalSum', totalSum); //---------------------------removeItem удаляет ключ значение в  localStorage
    localStorage.removeItem('currentIndex');
    

	if(totalSum < 9){
		firstAnswer.style.display = "block";
		firstAnswer.style.color = "#9932CC";	
	}else if(totalSum >= 9 && totalSum <= 14){
		secondAnswer.style.display = "block";
		secondAnswer.style.color = "#4682B4";
	}else {
		thirdAnswer.style.display = "block";
		thirdAnswer.style.color = "#008B8B";
	}
}

// Обработчик на событие загрузки страницы  ----------------------------------------------Запомнить!
window.addEventListener('load', () => {

  //Проверяю есть ли индекс, чтобы начать с той формы на которой остановились;
    if (localStorage.getItem('currentIndex')) { //---------------------------getItem получает ключ значение в  localStorage
      //задаю вопрос при помощи confirm
  let continueAnswer = confirm('Хотите продолжить тест?');

  //если confirm тру, начинаю с той формы на которой остановились;
  if(continueAnswer){ 
      let savedIndex = parseInt(localStorage.getItem('currentIndex'));
      //сохраненный индекс вопроса в локалСторэдж будет индекс вопроса, на который уже ответили. Чтобы продолжить с активной формы +1
      forms[savedIndex + 1].classList.add('active');
    
      // получаю сохраненную сумму ответов totalSum и продолжаю к ней прибавлять
      totalSum = parseInt(localStorage.getItem('totalSum'));
      console.log(`Общая сумма: ${totalSum}`);

    }
    else {
      //если конфирм фолс то возращаюсь в начало теста и удаляю все значения из localStorage
      forms[0].classList.add('active');
    }
  }
  // если индекса нет в localStorage начинаю тест заново
  else {
    forms[0].classList.add('active');
  }
});




//Это моя функция которую я хочу разобрать позже! не обращайте на нее внимание!

// function tabChange() {
  // let formActive = document.querySelector('.active');
  // console.log(formActive);
  // let forms = document.getElementsByTagName('form');
  // console.log(forms);
  // for(let i = 0; i < forms.length; i++){
    // if(!(forms[i] instanceof HTMLFormElement)) continue;
	
    // if(formActive === forms[i]){
		// console.log(i);
      // forms[i].classList.remove('active');
      // forms[(i+1)%forms.length].classList.add('active'); // добавил модуль по количеству форм
      // break; // выход из цикла
    // }  
  // }
// }
// let buttons = document.querySelectorAll('form button');
// buttons.forEach(function(button) {
  // button.addEventListener('click', tabChange);
// });


