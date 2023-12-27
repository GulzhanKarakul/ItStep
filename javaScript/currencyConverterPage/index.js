let input = document.getElementById('fileinput');

let textArea = document.getElementById('textarea');
let resultDiv = document.getElementById('result');

let safeButton = document.getElementById('safe');

oninput = (ev) =>{
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = showReadedText.bind(reader);
}

safeButton.onclick = (ev) => {
    if(resultDiv.textContent.length > 0){
        console.log(resultDiv.textContent);
        let myblob = new Blob([resultDiv.textContent], {type: 'text/plain'});
        let url = URL.createObjectURL(myblob);

        let link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', "text.txt");
        link.click();
    }
}

function showReadedText(ev){
    let text = this.result;
    //Вставляю исходный текст в div для визуализации исходного текста
    textArea.innerHTML = text;
    //Сразу запускаю функцию для конвертизации текста и его визуализвции в div REsult 
    exchange(text);
}

function exchange(text) {
    // Создаем объект currencies, который хранит соответствия между знаками валют и их кодами (USD, EUR, RUB).
    const currencies = {
      '$': 'USD',
      '$.': 'USD',
      '$,': 'USD',
      'USD': 'USD',
      'USD.': 'USD',
      'USD,': 'USD',
      '€': 'EUR',
      '€.': 'EUR',
      '€,': 'EUR',
      'EUR': 'EUR',
      'EUR.': 'EUR',
      'EUR,': 'EUR',
      '₽': 'RUB',
      '₽.': 'RUB',
      '₽,': 'RUB',
      'руб': 'RUB',
      'руб.': 'RUB',
      'руб,': 'RUB',
    };
  
    // Разбиваю текст на массив
    const words = text.split(' ');
  
    // Прохожу по каждому слову в массиве.
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
  
      // Проверяю текущее слово это знак валюты или нет, получаю соответствующий код валюты из объекта currencies
      let currency = currencies[word];
  
      if (currency) {
        // Если текущее слово является знаком валюты, пытаюсь найти сумму, перед найденным названием валюты
        let amount = parseFloat(words[i-1]);
  
        // Если сумм есть, получаем курс обмена для заданной валюты с помощью функции getRate
        if (!isNaN(amount)) {
          let rate = getRate(currency);
  
          // По курс обмена, вычисляю сумму в тенге и заменяю исходную сумму на нее
          if (rate) {
            let converted = (amount * rate).toFixed(1);
            let newWord = `${converted} тнг`;
            words[i-1] = newWord;
            words[i] = '';
          }
        }
      }
    }
    // Склеиваю массив слов обратно в строку с помощью метода join
    resultDiv.innerHTML = words.join(' ');
  }

  //Функция с курсом
  function getRate(currency) {
    const rates = {
      'USD': 430,
      'EUR': 510,
      'RUB': 5.8
    };
    return rates[currency];
  }
  