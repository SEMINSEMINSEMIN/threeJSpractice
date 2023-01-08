import * as THREE from "three";

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // width, height, depth
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const box = new THREE.Mesh( geometry, material );

export default box