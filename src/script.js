import * as THREE from 'three';
import gsap from 'gsap';
import './style.css';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight 
}
console.log('Hello Webpack Encore! Edit me in assets/app.js');
console.log(gsap);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;
const loader = new GLTFLoader();
const modelPath = './models/Duck/glTF/Duck.gltf ';
loader.load(
    modelPath,
    (gltf) => {
        const model = gltf.scene;
        model.position.set( 1, 1, 0 );
        model.scale.set( 0.01, 0.01, 0.01 );
        scene.add( model );
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
        console.error('Error loading GLTF:', error);
    }
);

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();