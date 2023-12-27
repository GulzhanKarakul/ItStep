import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { Fireball } from './fireball.js';
import { UI } from './ui.js';

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth - 15;
    canvas.height = window. innerHeight - 15;

    //Логика всей игры
    class  Game {
        constructor(width, height){
            this.width = width; //Размер игры. Размещается на канвас, поэтому и равна канвасу
            this.height = height;
            this.groundMargin = 50; // имитация дорожки. Располагаем игрока на 50px выше от bottom игры
            this.background = new Background(this);
            this.player = new Player(this); //Создание нового игрока как класс, который принимает эту игру в себя
            this.input = new InputHandler(this); // для прослушивания нажатых кнопок
            this.UI = new UI(this);
            this.fireballs = [];
            this.fireballTimer = 0;
            this.fireballInterval = 1000;
            this.time = 0;
            this.maxTime = 30000;
            this.gameOver = false;
            this.speed = 0;
            this.maxSpeed = 3;
            this.debug = false;
            this.lives = 5;
        }
        //медод для обновления игры, действий, положения персонажей, бэграунда и анимации
        //обновляется каждый раз через функцию animate и requestAnimationFrame(animate);
        //тем самым происходит даижение/изменение позиций заданых через player.update() и тд...
        update(deltaTime){
            this.time += deltaTime;
            if(this.time > this.maxTime) this.gameOver = true;
            this.background.update();
            this.player.update(this.input.keys);   //Передаю массив с нажатыми кнопками чтобы игрок реагировал на кнопки
            if(this.fireballTimer > this.fireballInterval) {
                this.addFireball();
                this.fireballTimer = 0;
            } else {
                this.fireballTimer += deltaTime;
                this.fireballInterval -= 0.6;  //Math.random();
            }
            this.fireballs.forEach( fireball => {
                fireball.update();
                if ( fireball.markedForDeletion) this.fireballs.splice(this.fireballs.indexOf(fireball), 1);
            });
            
        }
        draw(context) {
            //ВАЖНО!!! сначала идет рисовка бэка, а потом игрока, иначе игрока не будет видно.
            this.background.draw(context);
            //выводим игрока в канвас
            this.player.draw(context);
            this.fireballs.forEach( fireball => {
                fireball.draw(context);
            });
            this.UI.draw(context);
        }
        addFireball() {
            // if(this.speed > 0 && Math.random() < 0.5) 
            this.fireballs.push(new Fireball(this));
            console.log(this.fireballs);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        //Используем для очищения канваса при движении картинки
        //Первые две координаты, как всегда откуда идет очищение,
        //далее ширина и высота площади очищения
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Позволяет двигаться картинки и меняться во фреймах
        game.update(deltaTime);
        game.draw(ctx);
        //game.player.x++;
        if (!game.gameOver) requestAnimationFrame(animate) ;
    }
    animate(0);
});