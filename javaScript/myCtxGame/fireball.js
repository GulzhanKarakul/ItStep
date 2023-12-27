export class Fireball {
    constructor(game){
        this.game = game;
        this.size = Math.random() * 30 + 30;
        this.x = Math.random() * this.game.width;
        this.y = 0;
        this.image = document.getElementById('fireball');
        this.fps = 20;
        this.frameInterval = 1000/ this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
        this.speedX = 2;
        this.speedY = 5;
    }
    update() {
        //movement
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        //проверка если  за пределами экрана по оси Х для удаления спрайта
        if(this.y > this.game.height + this.size) this.markedForDeletion = true;
    }
    draw(context) {
        //Показывает сетку в которой находится спрайт, для лучшего понимания коллизий
        if(this.game.debug) context.strokeRect(this.x, this.y, this.size, this.size);
        context.drawImage(this.image, this.x,  this.y, this.size, this.size)
    }

}