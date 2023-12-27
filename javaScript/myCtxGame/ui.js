export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Monospace';
        this.livesImage = document.getElementById('heart');
    }
    draw(context) {
        context.save();
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowColor = 'navy';
        context.shadowBlur = 1;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = 'white';
        context.fillText('Your Lives: ', 20, 50);
        context.font = this.fontSize* 0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80);
        

        //lives
        for(let i=0; i < this.game.lives; i++){
            context.drawImage(this.livesImage, 30*i + 210, 30, 25, 25);
        }
        
        if(this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize* 2 + 'px ' + this.fontFamily;
            if(this.game.lives > 0){
                context.fillText('ВЫ ВЫЖИЛИ!!!',this.game.width * 0.5, this.game.height * 0.5 - 20);
            context.font = this.fontSize* 0.7 + 'px ' + this.fontFamily;
            context.fillText('Если то отчего Вы не сможете спастись? Я думаю НЕТ!!!',this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                context.fillText('ПЕЧАЛЬКА',this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize* 0.7 + 'px ' + this.fontFamily;
                context.fillText('Красивый звездопад. Грустно что Вам не удалось досмотреть его до конца...',this.game.width * 0.5, this.game.height * 0.5 + 20);
            }
        }
        context.restore();
    }
}