import * as THREE from 'three';
import * as CANNON from 'cannon';

export class Object3d {
    constructor(layer, type, dimensions, materialQualities, mass) {
        this.layer = layer;             // Ссылка на слой, к которому будет принадлежать объект
        this.type = type;               // Тип объекта (sphere, box, plane)
        this.dimensions = dimensions;   // Размеры объекта в массиве
        this.materialQualities = materialQualities;             // Материал объекта
        this.mass = mass;               // Масса объекта
        
        this.createGeometry();           // Создаем геометрию объекта
        this.createMaterial();           // Создаем материал объекта
        this.createPhysicsBody();        // Создаем физическое тело объекта
        
        this.mesh = new THREE.Mesh(this.geometry, this.material); // Создаем меш (графическую модель) объекта
        this.layer.add(this);                                     // Добавляем объект на слой
    }
  
    // Создаем геометрию объекта в зависимости от его типа
    createGeometry() {
        switch (this.type) {
            case 'sphere':
                this.geometry = new THREE.SphereGeometry(...this.dimensions);
                break;
            case 'box':
                this.geometry = new THREE.BoxGeometry(...this.dimensions);
                break;
            case 'plane':
                this.geometry = new THREE.PlaneGeometry(...this.dimensions);
                break;
            default:
                this.geometry = new THREE.BoxGeometry(...this.dimensions);
        }
    }
  
    // Создаем материал объекта
    createMaterial() {
        this.material = new THREE.MeshBasicMaterial(...this.materialQualities);
    }
  
    // Создаем физическое тело объекта в зависимости от его типа
    createPhysicsBody() {
        switch (this.type) {
            case 'sphere':
                this.body = new CANNON.Body({
                    shape: new CANNON.Sphere(this.dimensions[0] / 2),   // Создаем сферическую форму
                    mass: this.mass,                                    // Задаем массу
                });
                break;
            case 'box':
                this.body = new CANNON.Body({
                    shape: new CANNON.Box(new CANNON.Vec3(...this.dimensions)), // Создаем прямоугольную форму
                    material: new CANNON.Material(),                            // Создаем материал для взаимодействия с другими объектами
                    mass: this.mass,                                            // Задаем массу
                });
                break;
            case 'plane':
                this.body = new CANNON.Body({
                    shape: new CANNON.Plane(),                // Создаем плоскую форму
                    material: new CANNON.Material(),          // Создаем материал для взаимодействия с другими объектами
                    mass: this.mass,                          // Задаем массу
                });
                break;
        }
    }
  
    // Устанавливаем коэффициент трения между текущим объектом и другим объектом
    setFriction(otherObject, value) {
        const contactMaterial = new CANNON.ContactMaterial(this.body.material, otherObject.body.material, {
            friction: value,
        });
        this.layer.world.addContactMaterial(contactMaterial);
    }
  
    // Поворачиваем объект в указанных осях
    rotate(x, y, z) {
        this.body.quaternion.setFromEuler(x, y, z);
    }
  
    // Устанавливаем позицию объекта
    move(x, y, z) {
        this.body.position.set(x, y, z);
    }

    //
    force(x, y, z) {
        const force = new CANNON.Vec3(x, y, z);
        this.body.force = force;
    }

    // Обновляем позицию и ориентацию меша объекта на основе физического тела
    updatePhysics() {
        this.mesh.position.copy(this.body.position);
        this.mesh.quaternion.copy(this.body.quaternion);
    }
}

