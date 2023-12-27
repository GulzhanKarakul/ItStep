// Виталий, ничего не работает без requestAnimationFrame!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Чтобы проверить зайдите в layer.animationLoop() и попробуйте раскомментить requestAnimationFrame
// Тем не менее с requestAnimationFrame физика работает странно!!!!!!!!!!!!!!!!!!!!!!!!!!

import * as THREE from 'three';

import { Layer3d } from './layer.js';
import { Object3d } from './object3d.js';

// Создаем экземпляр WebGLRenderer и добавляем его в DOM-элемент body
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Создаем экземпляр класса Layer3d, передавая ему ранее созданный renderer
const layer = new Layer3d(renderer);
// Создаем объект "floor" с помощью класса Object3d, задавая тип "plane", размеры [30, 30, 1], цвет 0x113333 и массу 0
const floor = new Object3d(layer, 'plane', [30, 30, 1], [{color: 0x113333, side: THREE.DoubleSide}], 0);
floor.rotate(-Math.PI / 2, 0, 0); // Поворачиваем объект "floor" на -90 градусов по оси X
// Создаем объект "ball" с помощью класса Object3d, задавая тип "sphere", радиус 2, цвет 0x993311 и массу 3
const ball = new Object3d(layer, 'sphere', [2], [{color:0x993311, wireframe: true}], 3);
ball.move(0, 4, 10); // Перемещаем объект "ball" в позицию (0, 4, 10)
// Создаем объект "block" с помощью класса Object3d, задавая тип "box", размеры [1, 10, 1], цвет 0x666666 и массу 2
const block = new Object3d(layer, 'box', [1, 10, 1], [{color:0x666666}], 2);
// Перемещаем объект "block" в позицию (2, 5, -1)
block.move(2, 5, -1); 
// Устанавливаем коэффициент трения между объектами "block" и "floor"
block.setFriction(floor, 0.01); 
// Запускаем цикл анимации в классе Layer3d
layer.animationLoop(); 

// Создаем вектор ballForce для хранения силы, которая будет применяться к объекту "ball"

// Применяем силу ballForce к телу объекта "ball"
ball.force(0, 0, 0);

// Обрабатываем событие нажатия клавиши
window.onkeydown = (ev) => {
    const forceAmount = 20;
    switch (ev.code) {
        case "ArrowUp":
            // Применяем силу в направлении оси Z при нажатии клавиши "Стрелка вверх"
            ball.force(0, 0, -forceAmount);
            break;
        case "ArrowDown":
            // Применяем силу в направлении оси Z при нажатии клавиши "Стрелка вниз"
            ball.force(0, 0, forceAmount);
            break;
        case "ArrowLeft":
            // Применяем силу в направлении оси X при нажатии клавиши "Стрелка влево"
            ball.force(-forceAmount, 0, 0);
            break;
        case "ArrowRight":
            // Применяем силу в направлении оси X при нажатии клавиши "Стрелка вправо"
            ball.force(forceAmount, 0, 0);
            break;
    }
};

// Обрабатываем событие onkeyup
window.onkeyup = (ev) => {
    ball.force(0,0,0);
};

// Обрабатываем событие столкновения тела объекта "ball"
ball.body.addEventListener('collide', (ev) => {
    log(ev);
});