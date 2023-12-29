//Виталий, Cors политика не дает доступа! Также можете просмотреть закомментированное тоже.
//Оно в таком же формате работает... если нажать на переданную ссылку, я вижуданные, но только пока я нахожусь на сервере вк.
//В общем их сервер не дает доступа пока я делаю запрос с другого сервера? Что то вроде такого
//То же самое касается получения токена через код
//Хотя у них написано: Если вы разрабатываете веб-приложение и хотите работать с API из Javascript, в redirect_uri необходимо указать адрес страницы на Вашем сайте. В целях безопасности, этот адрес также должен быть указан в настройках вашего приложения (поля «Адрес сайта», «Базовый домен» и «Доверенный Redirect URI»).

const log = console.log;

const clientId = "51657549";
const clientSecret = "oUkbj1KjugWmRekGC4FA";
const serverSecret =
  "f0496461f0496461f049646110f35d5f2cff049f04964619426285f441960daf3524869";
const vkUrl = "https://oauth.vk.com";
const loginUrl =
  "https://oauth.vk.com/authorize?client_id=51657549&display=page&redirect_uri=http://localhost:52330/vk.html&scope=friends,notify,photos,wall,email,mail,groups,stats,offline&response_type=token&v=5.131";
const redirectUri = "http://localhost:52330/vk.html";
const api_version = "5.131";

window.onload = () => {
    const url = window.location;
    log(url);

    if (url.hash) main(url);
    else login();
};

function login() {
    let link = document.querySelector("#login a");
    //Отправляю запрос на вход
    link.href = loginUrl;
    link.parentElement.style.display = "block";
}

async function main(url) {
    let area = document.getElementById("main");
    area.style.display = "flex";

    let thisUrl = new URL(url.href);
    log(thisUrl);
    //Получаю токен из адресной строки
    let hrefArray = thisUrl.hash.split('&');
    log(hrefArray);
    const access_token = hrefArray[0].slice(hrefArray[0].indexOf("=") + 1);
    //Префикс vk1.a. является частью формата токена, который указывает на версию токена или тип доступа. Обычно, vk1 означает первую версию токена.
    log(access_token);
    const user_id = hrefArray[2].slice(hrefArray[2].indexOf("=") + 1);
    log(user_id);

    //Я пишу запрос как в документации и выходит ошибка с CORS POLICY .
    //В чем прикол я понять не могу, потому что если все тоже самое ввести Пример запроса на странице метода users.get, я получаю объект с юзером, а через запрос нет... 
    //И я вписывала headers как на дискорте, все равно ошибка
    //хотя если нажать на ссылку которую я передаю в fetch я перехожу в другое окно с моими данными

    const urlUser = `https://api.vk.com/method/users.get?user_id=${user_id}&access_token=${access_token}&v=${api_version}&fields=id,first_name,last_name,bdate,city,sex,photo_200_orig,schools,last_seen,music`;
    const response = await fetch(urlUser);
    const dataUser = await response.json();
    console.log(dataUser);

    





    //Вариант получения данных с использованием jsonP
    // function handleResponse(result) {
    //     console.log(result.response);
    // }
    // // Создаем элемент скрипта
    // const script = document.createElement('script');
    // // Устанавливаем URL запроса с указанием колбэк-функции
    // script.src = `https://api.vk.com/method/users.get?user_id=${user_id}&access_token=${access_token}&v=${api_version}&callback=handleResponse`;
    // // Добавляем элемент скрипта на страницу
    // document.body.appendChild(script);




    //VK API не поддерживает отправку запросов из фронтенд-кода (браузера) напрямую из-за политики безопасности CORS. Вместо этого, VK API требует, чтобы запросы на получение токена отправлялись с вашего сервера. Отправка запросов напрямую из фронтенд-кода приводит к ошибке CORS, которую вы видите.
    // let params = Object.fromEntries(thisUrl.searchParams);
    // const code = params.code;
    // const urlToken = "https://oauth.vk.com/access_token";

    // const data = new URLSearchParams();
    // data.append("client_id", clientId);
    // data.append("client_secret", clientSecret);
    // data.append("redirect_uri", redirectUri);
    // data.append("code", code);

    // const response = await fetch(urlToken, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: data,
    // });

    // const tokenData = await response.json();
    // console.log(tokenData);
}
