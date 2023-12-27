export class Cdn {
    #baseUrl = 'https://cdn.discordapp.com';

    getAvatar(id, filename) {
        return `${this.#baseUrl}/avatars/${id}/${filename}.png`;
    }

    getGuildIcon(guildId, icon){
        return `${this.#baseUrl}/icons/${guildId}/${icon}.png`;
    }

    getGuildSplash(guildId,splash){
        return `${this.#baseUrl}/splashes/${guildId}/${splash}.png`;
    }

    getGuildBunner(guildId, bunner){
        return `${this.#baseUrl}/banners/${guildId}/${bunner}.png`;
    }

    getMemberAvatar(guildId, userId, member){
        return `${this.#baseUrl}/guilds/${guildId}/users/${userId}/avatars/${member}.png`;
    }

    getMemberBunner(guildId, userId, member){
        return `${this.#baseUrl}/guilds/${guildId}/users/${userId}/banners/${member}.png`;
    }

    getUserbunner(id, bunner){
        return `${this.#baseUrl}/banners/${id}/${bunner}.png`;
    }

    getEmogi(emojiId){
        return `${this.#baseUrl}/emojis/${emojiId}.png`;
    }

    getSticker(stickerId){
        return `${this.#baseUrl}/stickers/${stickerId}.png *** ****`;
    }
}