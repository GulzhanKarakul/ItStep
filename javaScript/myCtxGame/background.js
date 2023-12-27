class Layer {
    constructor(game, width, height, speedModifier, image){
        this.game = game;
        this.width = width;
        this.height = height;
        //нужен потому что каждый бгрнд будет двигаться со своей скоростью
        this.speedModifier = speedModifier; 
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update() {
        //В случае если движение вышло из брнда, картинка 
        //возвращалась в значение 0, чтобы сделать имитацию бесконечного бэка
        if(this.x < -this.width) this.x = 0;
        //каждый бэк даижется со скоростью игры*свою скорость, чтобы сделать Paralax эффект
        else this.x -= this.game.speed * this.speedModifier;

    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
        this.layer1image = document.getElementById('layer1');
        this.layer2image = document.getElementById('layer2');
        this.layer3image = document.getElementById('layer3');
        this.layer4image = document.getElementById('layer4');
        this.layer5image = document.getElementById('layer5');
        this.layer6image = document.getElementById('layer6');
        this.layer7image = document.getElementById('layer7');
        this.layer1 = new Layer(this.game, this.width, this.height, 1, this.layer1image);
        this.layer2 = new Layer(this.game, this.width, this.height, 0.8, this.layer2image);
        this.layer3 = new Layer(this.game, this.width, this.height, 0.65, this.layer3image);
        this.layer4 = new Layer(this.game, this.width, this.height, 0.5, this.layer4image);
        this.layer5 = new Layer(this.game, this.width, this.height, 0.35, this.layer5image);
        this.layer6 = new Layer(this.game, this.width, this.height, 0.2, this.layer6image);
        this.layer7 = new Layer(this.game, this.width, this.height, 0, this.layer7image);
        this.backgroundLayers = [this.layer7, this.layer6, this.layer5,  this.layer4, this.layer3, this.layer2, this.layer1];  //
    }
    update() {
        this.backgroundLayers.forEach(layer => {
            layer.update();
        })
    }
    draw(context) {
        this.backgroundLayers.forEach( layer => {
            layer.draw(context);
        })
    }
}