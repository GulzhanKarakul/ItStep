export class Discord {
    static authUrl = 'https://discord.com/api/oauth2/authorize?client_id=1105802053621653546&redirect_uri=http%3A%2F%2Flocalhost%3A52330%2FCW1.html&response_type=code&scope=identify%20guilds%20messages.read';
    #clientId = '1105802053621653546';
    #clientSecret = 'El4rUoj3HqtNr9nW4KJwahFy0tLzmP2n';
    #apiUrl = 'https://discord.com/api/v10';
    #token = null;
    #user = null;
    #guilds = null;
    #oneGuild = null;

    async getToken(userCode, origin) {
        const url = this.#apiUrl + '/oauth2/token';
        let data = new URLSearchParams();
        data.append('client_id', this.#clientId);
        data.append('client_secret', this.#clientSecret);
        data.append('grant_type', 'authorization_code');
        data.append('code', userCode);
        data.append('redirect_uri', "http://localhost:52330/CW1.html"); // origin
        console.log(origin);

        
        let response = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: data,
        })

        let token = await response.json();
        if (token.access_token) {
            this.#token = token;
            return true;
        }
        return false;
    }

    async getUser() {
        const url = this.#apiUrl + '/users/@me';
        let response = await fetch(url, {
            headers: { 'Authorization': this.#token.token_type + ' ' + this.#token.access_token }
        });

        let user = await response.json();
        if (user.id) {
            this.#user = user;
        }
        return this.#user;
    }

    async getGuilds(){
        const url = this.#apiUrl + '/users/@me/guilds';
        let response = await fetch(url, {
            headers: {'Authorization': this.#token.token_type + ' ' + this.#token.access_token}
        });
        
        let guilds = await response.json();
        if (guilds.id) {
            this.#guilds = guilds;
        }
        console.log(this.#guilds);
        return this.#guilds;
    }

    async getGuildById(idGuild){
        const url = this.#apiUrl + `/guilds/${idGuild}`;
        let responce = await fetch(url, 
            {headers: {'Authorization': 'Bearer ' + responseData.access_token}
        });

        let oneGuild = await responce.json();
        if (oneGuild.id) {
            this.#oneGuild = oneGuild;
        }
        console.log(this.#oneGuild);
        return this.#oneGuild;
    }
}