//Это мое первое за все время скаталово... Не верю что в итоге это Ерден...
//Я прочитала, Я поняла что он делает...

const log = console.log;

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as Dat from './dat.gui.module.js';

const renderer =  new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.append(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75
    , window.innerWidth / window.innerHeight
    , 0.1
    , 1000
);

scene.add(camera);
camera.position.set(0, 4, 5);
camera.rotation.set(-0.6, 0, 0);


const axes = new THREE.AxesHelper(3);
scene.add(axes)

const loader = new  THREE.TextureLoader();
scene.background = loader.load('./space.jpeg');

// Создаем источник света
let light = new THREE.PointLight(0xffffff); // Белый свет
light.position.set(0, 0, 0); // Позиция источника света
scene.add(light);

// Создаем внешнюю сферу (орбиту)
let outerGeometry = new THREE.SphereGeometry(8, 32, 32);
let outerMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: true });
let outerSphere = new THREE.Mesh(outerGeometry, outerMaterial);
scene.add(outerSphere);

// Sun Obj...
const texture = loader.load('./sun.jfif')
const sunGeometry = new THREE.SphereGeometry(4);
const sunMaterial = new THREE.MeshStandardMaterial({
    map: texture  // Присваиваем текстуру материалу
    , emissiveMap: texture // Присваиваем текстуру в качестве светящейся карты
    , emissive: 0xffffff // Устанавливаем белый цвет свечения
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.castShadow = false;
sun.position.set(0, 0, 0);
scene.add(sun);

const earthGeometry = new THREE.SphereGeometry(2);
const earthMaterial = new THREE.MeshStandardMaterial({
    map: loader.load('./earth.png')
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.castShadow = true;
earth.position.set(0, 0, 0);
scene.add(earth);

earth.position.set(20, 0, 0);

outerSphere.add(earth);

const moonGeometry = new THREE.SphereGeometry(1);
const moonMaterial = new THREE.MeshStandardMaterial({
    map: loader.load('./moon.png')
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.castShadow = true;
moon.position.set(0, 0, 30);
scene.add(moon);

moon.position.set(6, 0, 0);
earth.add(moon);

const gui = new Dat.GUI();
let options = {
    earthSpeed: 1,
    moonSpeed: 1,
};

gui.add(options, 'earthSpeed', 0, 10);
gui.add(options, 'moonSpeed', 0, 10);

let step = 0;
function animate() {
    requestAnimationFrame(animate);
    step += 0.000000002;
    outerSphere.rotation.y += step * options.earthSpeed;
    earth.rotation.y +=  step * options.moonSpeed;
    moon.rotation.y += 0.0002;

    renderer.render(scene, camera);
}

animate();
const orbitControls = new OrbitControls(camera, renderer.domElement);
renderer.setAnimationLoop(animate);