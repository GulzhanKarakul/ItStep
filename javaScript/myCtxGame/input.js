//класс для управления игроком

//При управлении таким методом есть свои плюсы. При нажатии двух+ кнопок, эти кнопки попадают в массив и можно расширить возможности движения/действий спрайта.
//Например, когда в масси попадает вверх и право, можно добавить новое движение с новыми фреймами, типа движение по диагонали.

export class InputHandler {
    constructor(game) {
        this.game = game;
        //Массив будет содержать ключи кнопок которые были нажаты
        this.keys = [];
        window.addEventListener('keydown', e => {
            console.log(e);
            //Эти нажатые кнопки добавляются в массив инпут в игре, отсюда при составлении апдейта для игрока,
            //ореентируясь на киКод в массиве инпут, будем менять движениие/направление/фрейм игрока в игре/из источника
            if((e.keyCode === 83 ||     //Down handler key=S
                e.keyCode === 87 ||    //UP handler Key= W
                e.keyCode === 65 ||    //LEFT handler Key=A
                e.keyCode === 68 ||    //RIGHT handler Key=D
                e.keyCode === 13) &&  //ATTACK handler Key=ENTER
                this.keys.indexOf(e.keyCode) === -1
            ){
                this.keys.push(e.keyCode);
            } else if(e.key === 'z') this.game.debug = !this.game.debug;

            console.log(this.keys);
        });
        //При этом после того как мы переестаем нажимать на кнопку, массив инпут полностью очищается,
        //Чтобы при след нажатии правильно среагировать на нажатую кнопку
        window.addEventListener('keyup', e => {
            
            if( e.keyCode === 83 ||     //Down handler key=S
                e.keyCode === 87 ||     //UP handler Key= W
                e.keyCode === 65 ||     //LEFT handler Key=A
                e.keyCode === 68  ||    //RIGHT handler Key=D)
                e.keyCode === 13        //ATTACK handler Key=ENTER
            ) {
                this.keys.splice(this.keys.indexOf(e.keyCode), 1);
            }

            console.log(this.keys);
        });
       
    }
}