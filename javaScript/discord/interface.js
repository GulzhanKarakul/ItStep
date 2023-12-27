import { Cdn } from "./cdn.js";

export class Interface {
    #cdn = null;
    constructor () {
        this.#cdn = new Cdn();
    }

    showLogin (loginUrl) {
        let link = document.querySelector('#login a');
        link.href = loginUrl;
        let area = link.parentElement;
        area.style.display = 'block';
    }

    showMain (dataUser) {
        let main = document.querySelector('#main');
        main.style.display = 'flex';
        
        let homePage = document.getElementById('user-home-page');

        let h3Welcoming = document.createElement('h2');
        h3Welcoming.textContent = 'Welcome ' + dataUser.username;

        homePage.prepend(h3Welcoming);

        let user = document.querySelector('.user');

        let imgAvatar = document.createElement('img');
        if(dataUser.avatar === null) {
            imgAvatar.src = 'avatar.png';
        } else imgAvatar.src = this.#cdn.getAvatar(dataUser.id, dataUser.avatar);

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

    showGuilds(dataUserGuilds){
        let listOfGuilds = document.querySelector('.listOfGuilds');
    
        for(let guild of dataUserGuilds){
            let guildItem = document.createElement('li');
        
            let guildIcon = document.createElement('img');
            if(guild.icon === null){
                    guildIcon.src = 'guild1.jfif';
            } else guildIcon.src = this.#cdn.getGuildIcon(guild.id, guild.icon);
        
            let nameGuild = document.createElement('p');
            nameGuild.textContent = guild.name;
        
            guildItem.append(guildIcon);
            guildItem.append(nameGuild);
        
            listOfGuilds.append(guildItem);
        }
    }
}

