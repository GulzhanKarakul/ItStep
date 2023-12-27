let button = document.getElementById('button');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
//Я поняла почему у меня не получилось в прошлый раз))))
red.style.filter = 'brightness(130%)'

button.addEventListener('click', () => {
    
    if(red.style.filter == "brightness(130%)"){
        red.style.filter = "brightness(60%)";
        yellow.style.filter = "brightness(130%)";
        green.style.filter = "brightness(60%)";
    }
    else if(yellow.style.filter == "brightness(130%)"){
        red.style.filter = "brightness(60%)";
        yellow.style.filter = "brightness(60%)";
        green.style.filter = "brightness(130%)";
    }
    else if(green.style.filter == "brightness(130%)"){
        red.style.filter = "brightness(130%)";
        yellow.style.filter = "brightness(60%)";
        green.style.filter = "brightness(60%)";
    }
})


