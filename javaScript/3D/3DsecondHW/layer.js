const log = console.log;

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as CANNON from 'cannon';

// Конструктор класса Layer3d принимает экземпляр объекта WebGLRenderer в качестве параметра.
// Он инициализирует и настраивает все необходимые компоненты для работы с трехмерной сценой.
export class Layer3d {
    constructor(renderer) {
        // Сохраняем переданный объект WebGLRenderer
        this.renderer = renderer; 
        // Создаем объекты сцены и камеры
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Инициализируем контроллер орбиты для управления камерой
        this.orbitCtrl = new OrbitControls(this.camera, this.renderer.domElement);
        // Устанавливаем начальное положение камеры
        this.camera.position.set(0, 5, 30);
        // Обновляем состояние контроллера орбиты
        this.orbitCtrl.update();
        // Создаем пустой массив для хранения объектов в сцене
        this.objects = [];

        // Создаем объект мира физики CANNON.World
        this.world = new CANNON.World({
            gravity: new CANNON.Vec3(0, -9.82, 0), // Задаем гравитацию (по умолчанию -9.82 по оси Y)
        });

        // Задаем шаг времени для обновления физического мира (30 кадров в секунду)
        this.worldTimeStep = 1 / 30; 

        // Запускаем цикл анимации
        this.animationLoop();
    }

    // Метод add принимает объект и добавляет его в сцену, а также в физический мир.
    add(object) {
        // Добавляем объект в массив объектов сцены
        this.objects.push(object);
        // Добавляем меш объекта в трехмерную сцену
        this.scene.add(object.mesh);
        // Добавляем тело объекта в физический мир
        this.world.addBody(object.body);
    }

    // Метод remove принимает объект и удаляет его из сцены и физического мира.
    remove(object) {
        // Ищем индекс объекта в массиве объектов сцены
        const index = this.objects.indexOf(object);
        if (index !== -1) {
            // Удаляем объект из массива объектов сцены
            this.objects.splice(index, 1);
            // Удаляем меш объекта из трехмерной сцены
            this.scene.remove(object.mesh);
            // Удаляем тело объекта из физического мира
            this.world.removeBody(object.body);
        }
    }

    // Метод animationLoop выполняет цикл анимации.
    animationLoop() {
        // Выполняем шаг физического мира
        this.world.step(this.worldTimeStep);
        // Обновляем физические свойства объектов в сцене
        this.objects.forEach((object) => {
            object.updatePhysics();
        });
        // Рендерим трехмерную сцену с использованием камеры
        this.renderer.render(this.scene, this.camera);

        // Ничего не работает без requestAnimationFrame
        // requestAnimationFrame(() => {
        //     this.animationLoop();
        // });
    }
}
