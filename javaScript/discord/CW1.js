'use strict';

const log = console.log;
const loginUrl = 'https://discord.com/api/oauth2/authorize?client_id=1105802053621653546&redirect_uri=http%3A%2F%2Flocalhost%3A52330%2FCW1.html&response_type=code&scope=identify%20guilds%20messages.read';
const clientId = '1105802053621653546';
const clientSecret = 'El4rUoj3HqtNr9nW4KJwahFy0tLzmP2n';
const discordUrl = 'https://discord.com/api/v10';


window.onload = () => {
    const url = window.location;
    log(url);

    if(url.search) main(url);
    else login();
}

function login() {
    let link = document.querySelector('#login a');
    link.href = loginUrl;
    // link.parentElement.style.display = 'block';

}

async function main(url) {
    let area = document.getElementById('main');
    area.style.display = 'flex';

    let thisUrl = new URL(url.href);
    let params = Object.fromEntries(thisUrl.searchParams);
    log(params);

    url = discordUrl + '/oauth2/token';
    // let data = {
    //     'client_id': clientId,
    //     'client_secret': clientSecret,
    //     'grant_type': 'authorization_code',
    //     'code': params.code,
    //     'redirect_uri': thisUrl.origin + thisUrl.pathname,
    // }

    let data = new URLSearchParams();
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    data.append('grant_type', 'authorization_code');
    data.append('code', params.code);
    data.append('redirect_uri', thisUrl.origin + thisUrl.pathname);
    log( thisUrl.origin + thisUrl.pathname);


    //Отправляю запрос на вход
    let response = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data,
    })
    let responseData = await response.json();
    log(responseData);
      
    //Получаю Юзера
    let urlForUser = discordUrl + '/users/@me';
    let curUser = await fetch(urlForUser, {headers: {'Authorization': 'Bearer ' + responseData.access_token}});
    let dataUser = await curUser.json();
    log(dataUser);

    //Запускаю функцию для отображения data юзера
    getUser(dataUser);

    //Получаю гилдии
    let urlForUserGuilds = discordUrl + '/users/@me/guilds';
    let userGuildis = await fetch(urlForUserGuilds, {headers: {'Authorization': 'Bearer ' + responseData.access_token}});
    let dataUserGuilds = await userGuildis.json();
    log(dataUserGuilds);

    getGuilds(dataUserGuilds);

    let idGuild = '1044311961040597102'; //Это айди гильдии которая есть у меня в списках... Все равно синтаксис url не срабатывает... 

    //Получаю одну гилдию по айди 
    let urlForOneGuild = discordUrl + `/guilds/${idGuild}`;
    log(urlForOneGuild);
    let oneGuild = await fetch(urlForOneGuild, {headers: {'Authorization': 'Bearer ' + responseData.access_token}});
    let oneGuildData = await oneGuild.json();
    log(oneGuildData);

} 


async function getUser(dataUser){
    let homePage = document.getElementById('user-home-page');

    let h3Welcoming = document.createElement('h2');
    h3Welcoming.textContent = 'Welcome ' + dataUser.username;

    homePage.prepend(h3Welcoming);

    let user = document.querySelector('.user');

    let imgAvatar = document.createElement('img');
    if(dataUser.avatar === null) {
        imgAvatar.src = 'avatar.png';
    } else imgAvatar.src = 'https://cdn.discordapp.com/avatars/' + dataUser.id + '/' + dataUser.avatar + '.png';

    let userName = document.createElement('h3');
    userName.id = 'userName';
    userName.textContent = dataUser.username;

    let idDiscriminator = document.createElement('h3');
    idDiscriminator.id = 'id';
    idDiscriminator.textContent = 'Id #' + dataUser.discriminator;

    user.append(imgAvatar);
    user.append(userName);
    user.append(idDiscriminator);
}

async function getGuilds(dataUserGuilds){
    let listOfGuilds = document.querySelector('.listOfGuilds');

    if(dataUserGuilds.length === 0) {
        let divOfGuilds = document.getElementById('guilds');
        // let sadMessage = document.createElement('p');
        let sadMessage = document.createElement('h3');
        sadMessage.textContent = 'Are you an Introvert? Coz, How so? There is No Guilds...'
        divOfGuilds.prepend(sadMessage);
    }else {
        for(let x of dataUserGuilds){
            let guildItem = document.createElement('li');
    
            let guildIcon = document.createElement('img');
            if(x.icon === null){
                guildIcon.src = 'guild1.jfif';
            } else guildIcon.src = 'https://cdn.discordapp.com/icons/' + x.id+ '/' + x.icon + '.png';
    
            let nameGuild = document.createElement('p');
            nameGuild.textContent = x.name;
    
            guildItem.append(guildIcon);
            guildItem.append(nameGuild);
    
            listOfGuilds.append(guildItem);
        }
    }
}