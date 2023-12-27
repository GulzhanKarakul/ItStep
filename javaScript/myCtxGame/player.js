

export class Player {
    constructor(game) {
        //Принимает игру, можно получать/использовать/менять значения в игре при помощи этого свойства 
        //Буквально связывает с игрой игрока
        this.game = game;
        this.width = 95;
        this.height = 159;
        this.x = 0;     //как и на координатах в JS х и у всегда обозначают левую верхнюю точку.
        this.y = this.game.height - this.height - this.game.groundMargin; // имитация дорожки. Располагаем игрока на 50px выше от bottom игры; //позиция по высоте игрока внизу дисплея игры
        this.image = document.getElementById('player');
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 11;
        this.speed = 0;        //Задаем скорость движения игроку
        //this.maxSpeed = 10     //Максимальная скорость игрока
    }
    //update двигает игрока в зависимости от User Input
    update(input) {
        this.checkCollision();

        //Горизонтальное движение по оси Х
        //Персонаж будет ускоряться при помощи скорости
         //Такая запись позволяет игроку двигаться без остановки, увеличивая свое положение по Х на скорость
 
        if(input.includes(68)) {  //this.speed = this.maxSpeed;   //Если в массиве есть киКод D(68) увеличиваем координату Х  чтобы была имитация движения направо и и т.д
            this.speed = 2;
            this.x += this.speed; 
            this.frameY = 2;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }    
        else if(input.includes(65)){
            this.speed = -2;  
            this.x += this.speed; 
            this.frameY = 1;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }
        //Когда кнопки не нажаты, не двигается спрайт
        else this.speed = 0;
        this.game.speed = this.speed*2;
        //Создание границ, чтобы спрайт не выходил за пределы окна
        if(this.x < 0) this.x =0;
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        
        if(input.includes(87)) {  //this.speed = this.maxSpeed;   //Если в массиве есть киКод D(68) увеличиваем координату Х  чтобы была имитация движения направо и и т.д
            this.speed = -2;
            this.y += this.speed;
            this.frameY = 3;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }    
        else if(input.includes(83)){
            this.speed = 2; 
            this.y += this.speed;
            this.frameY = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }
        // vertical boundaries
        if (this.y > this.game.height - this.height - this.game.groundMargin) {
            this.y = this.game.height - this.height - this.game.groundMargin;
        } else if(this.y < this.game.height - this.height - 200){
            this.y = this.game.height - this.height - 200
        }

    }
    
    //Отрисовка игрока
    draw(context) {
        //метод для вывода картинки, сначала идет source картинки,
        //потом откуда мы хотим ее взять с картинки(координаты+ширина/высота)4значения
        //потом где мы хотим чтобы картинка отрисовалась в канвасе(координаты+ширина/высота)4значения
        
        if(this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
        
        context.drawImage(this.image, this.frameX*this.width, 
                          this.frameY*this.height, this.width, this.height, 
                          this.x, this.y, this.width, this.height);
    }

    checkCollision() {
        this.game.fireballs.forEach( fireball => {
            if(
                fireball.x < this.x + this.width &&
                fireball.x + fireball.size > this.x &&
                fireball.y < this.y + this.height &&
                fireball.y + fireball.size > this.y
            ) {
                //collision detected
                fireball.markedForDeletion = true;
                //уменьшается жизнь
                this.game.lives--;
                if(this.game.lives <=0) this.game.gameOver = true;
                
            } 
        })
    }

}