import { Discord } from "./discort.js";
import {Interface} from "./interface.js";

export class Application {
    #url = '';
    #params = undefined;
    #interface = undefined;
    #discord = undefined;
    constructor (url) {
        this.#url = url;
        this.#interface = new Interface();

        if (this.#url.search) this.#params = Object.fromEntries(this.#url.searchParams);
    }

    async start () {
        if (this.#params) await this.main().then();
        else this.login();
    };

    login () {
        let url = Discord.authUrl;
        this.#interface.showLogin(url);
    };

    async main () {
        this.#discord = new Discord();
        const myUrl = this.#url.origin + this.#url.pathname;

        let gotToken = await this.#discord.getToken(this.#params.code);
        
        if (gotToken) {
            let user = await this.#discord.getUser();
            this.#interface.showMain(user);
        }
    };
}